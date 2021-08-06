import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
  } from '@nestjs/graphql'
  import { Schema as MongooseSchema } from 'mongoose'

import { Minor, MinorDocument } from './model/minors.model'
import { MinorsService } from './minors.service'
import {
  CreateMinorInput,
  ListMinorInput,
  UpdateMinorInput,
} from './minors.inputs'

@Resolver(() => Minor)
export class MinorsResolver {
  constructor(private minorService: MinorsService) {}

  @Query(() => Minor)
  async minor(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.minorService.getById(_id)
  }

  @Query(() => [Minor])
  async minors(
    @Args('filters', { nullable: true }) filters?: ListMinorInput,
  ) {
    return this.minorService.list(filters)
  }

  @Mutation(() => Minor)
  async createMinor(@Args('payload') payload: CreateMinorInput) {
    return this.minorService.create(payload)
  }

  @Mutation(() => Minor)
  async updateMinor(@Args('payload') payload: UpdateMinorInput) {
    return this.minorService.update(payload)
  }

  @Mutation(() => Minor)
  async deleteMinor(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.minorService.delete(_id)
  }
}