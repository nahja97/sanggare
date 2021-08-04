import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
  } from '@nestjs/graphql'
import { Schema as MongooseSchema, Schema, Types } from 'mongoose'
import * as bcrypt from 'bcrypt';

const round = 30
const salt = bcrypt.genSaltSync(round);

import { User, UserDocument } from './model/users.model'
import { UsersService } from './users.service'
import {
  CreateUserInput,
  ListUserInput,
  UpdateUserInput,
} from './users.inputs'

import { Role } from '../roles/model/roles.model'
// import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => User)
export class UsersResolver {
  constructor(private userService: UsersService, ) {}

//   @UseGuards(GqlAuthGuard)
  @Query(() => User)
  async user(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.userService.getById(_id)
  }

//   @UseGuards(GqlAuthGuard)
  @Query(() => [User])
  async users(
    @Args('filters', { nullable: true }) filters?: ListUserInput,
  ) {
    return this.userService.list(filters)
  }

//   @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  async createUser(@Args('payload') payload: CreateUserInput) {
    payload.password = bcrypt.hashSync(payload.password, salt)
    try {
        return this.userService.create(payload)
    } catch(err) {
        throw new Error(err)
    }
  }

//   @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  async updateUser(@Args('payload') payload: UpdateUserInput) {
    return this.userService.update(payload)
  }

//   @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  async deleteUser(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.userService.delete(_id)
  }

  @ResolveField()
  async role(
    @Parent() user: UserDocument,
    @Args('populate') populate: boolean,
  ) {
    if (populate) {
        try {
            await user.populate({ path: 'role', model: Role.name }).execPopulate()
        } catch(err) {
            throw new Error('Email is already in use')
        }
    }
    return user.role

    
  }
}