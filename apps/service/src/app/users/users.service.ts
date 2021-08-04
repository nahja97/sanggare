import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Schema as MongooseSchema } from 'mongoose'

import { User, UserDocument } from './model/users.model'
import { Role, RoleDocument } from '../roles/model/roles.model'
import {
  CreateUserInput,
  ListUserInput,
  UpdateUserInput,
} from './users.inputs'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Role.name) private roleModel: Model<RoleDocument>,
  ) {}

  async create(payload: CreateUserInput) {
      
    try {
        const role = await this.roleModel.findById(payload.role).exec()
    if (role) {
        const createdUser = new this.userModel(payload)
        return createdUser.save()
    }
        throw new Error('Create User Unsuccessfully')
    } catch(err) {
        throw new Error(err)
    }
    
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.userModel.findById(_id).exec()
  }

  list(filters: ListUserInput) {
    return this.userModel.find({ ...filters }).exec()
  }

  update(payload: UpdateUserInput) {
    return this.userModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec()
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.userModel.findByIdAndDelete(_id).exec()
  }
}
