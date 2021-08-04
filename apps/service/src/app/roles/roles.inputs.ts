import { Schema as MongooseSchema } from 'mongoose'
import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateRoleInput {
  @Field(() => String)
  name: string
}

@InputType()
export class ListRoleInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, { nullable: true })
  name?: string
}

@InputType()
export class UpdateRoleInput {
  @Field(() => String, { nullable: true })
  _id: MongooseSchema.Types.ObjectId
  
  @Field(() => String, { nullable: true })
  name?: string
}