import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Schema as MongooseSchema } from 'mongoose'

import { Major, MajorDocument } from './model/majors.model'
import {
  CreateMajorInput,
  ListMajorInput,
  UpdateMajorInput,
} from './majors.inputs'

@Injectable()
export class MajorsService {
  constructor(
    @InjectModel(Major.name) private majorModel: Model<MajorDocument>,
  ) {}

  create(payload: CreateMajorInput) {
    const createdMajor = new this.majorModel(payload)
    return createdMajor.save()
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.majorModel.findById(_id).exec()
  }

  list(filters: ListMajorInput) {
    return this.majorModel.find({ ...filters }).exec()
  }

  update(payload: UpdateMajorInput) {
    return this.majorModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec()
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.majorModel.findByIdAndDelete(_id).exec()
  }
}
