import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Schema as MongooseSchema } from 'mongoose'

import { Type, TypeDocument } from './model/types.model'
import {
  CreateTypeInput,
  ListTypeInput,
  UpdateTypeInput,
} from './types.inputs'

@Injectable()
export class TypesService {
  constructor(
    @InjectModel(Type.name) private typeModel: Model<TypeDocument>,
  ) {}

  create(payload: CreateTypeInput) {
    const createdType = new this.typeModel(payload)
    return createdType.save()
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.typeModel.findById(_id).exec()
  }

  list(filters: ListTypeInput) {
    return this.typeModel.find({ ...filters }).exec()
  }

  update(payload: UpdateTypeInput) {
    return this.typeModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec()
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.typeModel.findByIdAndDelete(_id).exec()
  }
}
