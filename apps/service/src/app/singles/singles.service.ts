import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Schema as MongooseSchema } from 'mongoose'

import { Single, SingleDocument } from './model/singles.model'
import {
  CreateSingleInput,
  ListSingleInput,
  UpdateSingleInput,
} from './singles.inputs'

@Injectable()
export class SinglesService {
  constructor(
    @InjectModel(Single.name) private singleModel: Model<SingleDocument>,
  ) {}

  create(payload: CreateSingleInput) {
    const createdSingle = new this.singleModel(payload)
    return createdSingle.save()
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.singleModel.findById(_id).exec()
  }

  list(filters: ListSingleInput) {
    return this.singleModel.find({ ...filters }).exec()
  }

  update(payload: UpdateSingleInput) {
    return this.singleModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec()
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.singleModel.findByIdAndDelete(_id).exec()
  }
}
