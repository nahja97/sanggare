import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
  } from '@nestjs/graphql'
  import { Schema as MongooseSchema } from 'mongoose'

import { Single, SingleDocument } from './model/singles.model'
import { SinglesService } from './singles.service'
import {
  CreateSingleInput,
  ListSingleInput,
  UpdateSingleInput,
} from './singles.inputs'

@Resolver(() => Single)
export class SinglesResolver {
  constructor(private singleService: SinglesService) {}

  @Query(() => Single)
  async single(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.singleService.getById(_id)
  }

  @Query(() => [Single])
  async singles(
    @Args('filters', { nullable: true }) filters?: ListSingleInput,
  ) {
    return this.singleService.list(filters)
  }

  @Mutation(() => Single)
  async createSingle(@Args('payload') payload: CreateSingleInput) {
    return this.singleService.create(payload)
  }

  @Mutation(() => Single)
  async updateSingle(@Args('payload') payload: UpdateSingleInput) {
    return this.singleService.update(payload)
  }

  @Mutation(() => Single)
  async deleteSingle(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.singleService.delete(_id)
  }
}