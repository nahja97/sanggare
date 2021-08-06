import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
  } from '@nestjs/graphql'
  import { Schema as MongooseSchema } from 'mongoose'

import { Type, TypeDocument } from './model/types.model'
import { TypesService } from './types.service'
import {
  CreateTypeInput,
  ListTypeInput,
  UpdateTypeInput,
} from './types.inputs'

@Resolver(() => Type)
export class TypesResolver {
  constructor(private typeService: TypesService) {}

  @Query(() => Type)
  async type(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.typeService.getById(_id)
  }

  @Query(() => [Type])
  async types(
    @Args('filters', { nullable: true }) filters?: ListTypeInput,
  ) {
    return this.typeService.list(filters)
  }

  @Mutation(() => Type)
  async createType(@Args('payload') payload: CreateTypeInput) {
    return this.typeService.create(payload)
  }

  @Mutation(() => Type)
  async updateType(@Args('payload') payload: UpdateTypeInput) {
    return this.typeService.update(payload)
  }

  @Mutation(() => Type)
  async deleteType(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.typeService.delete(_id)
  }
}