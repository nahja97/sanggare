import { Schema as MongooseSchema } from 'mongoose'
import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateSingleInput {
  @Field(() => String)
  name: string

  @Field(() => Number, { nullable: true })
  work_hour?: number

  @Field(() => Number, { nullable: true })
  weight_of_labour?: number

  @Field(() => Number, { nullable: true })
  overhead_cost?: number
}

@InputType()
export class ListSingleInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => Number, { nullable: true })
  work_hour?: number

  @Field(() => Number, { nullable: true })
  weight_of_labour?: number

  @Field(() => Number, { nullable: true })
  overhead_cost?: number
}

@InputType()
export class UpdateSingleInput {
  @Field(() => String, { nullable: true })
  _id: MongooseSchema.Types.ObjectId
  
  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => Number, { nullable: true })
  work_hour?: number

  @Field(() => Number, { nullable: true })
  weight_of_labour?: number

  @Field(() => Number, { nullable: true })
  overhead_cost?: number
}