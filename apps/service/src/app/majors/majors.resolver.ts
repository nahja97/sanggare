import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
  } from '@nestjs/graphql'
  import { Schema as MongooseSchema } from 'mongoose'

import { Major, MajorDocument } from './model/majors.model'
import { MajorsService } from './majors.service'
import {
  CreateMajorInput,
  ListMajorInput,
  UpdateMajorInput,
} from './majors.inputs'

@Resolver(() => Major)
export class MajorsResolver {
  constructor(private majorService: MajorsService) {}

  @Query(() => Major)
  async major(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.majorService.getById(_id)
  }

  @Query(() => [Major])
  async majors(
    @Args('filters', { nullable: true }) filters?: ListMajorInput,
  ) {
    return this.majorService.list(filters)
  }

  @Mutation(() => Major)
  async createMajor(@Args('payload') payload: CreateMajorInput) {
    return this.majorService.create(payload)
  }

  @Mutation(() => Major)
  async updateMajor(@Args('payload') payload: UpdateMajorInput) {
    return this.majorService.update(payload)
  }

  @Mutation(() => Major)
  async deleteMajor(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.majorService.delete(_id)
  }
}