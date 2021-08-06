import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Schema as MongooseSchema } from 'mongoose'

import { Minor, MinorDocument } from './model/minors.model'
import {
  CreateMinorInput,
  ListMinorInput,
  UpdateMinorInput,
} from './minors.inputs'

@Injectable()
export class MinorsService {
  constructor(
    @InjectModel(Minor.name) private minorModel: Model<MinorDocument>,
  ) {}

  create(payload: CreateMinorInput) {
    const createdMinor = new this.minorModel(payload)
    return createdMinor.save()
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.minorModel.findById(_id).exec()
  }

  list(filters: ListMinorInput) {
    return this.minorModel.find({ ...filters }).exec()
  }

  update(payload: UpdateMinorInput) {
    return this.minorModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec()
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.minorModel.findByIdAndDelete(_id).exec()
  }
}
