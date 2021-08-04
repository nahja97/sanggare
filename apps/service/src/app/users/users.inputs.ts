import { Schema as MongooseSchema } from 'mongoose'
import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateUserInput {
  @Field(() => String)
  name: string

  @Field(() => String)
  username: string

  @Field(() => String)
  password: string

  @Field(() => String)
  role: MongooseSchema.Types.ObjectId
}

@InputType()
export class ListUserInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => String, { nullable: true })
  username?: string

  @Field(() => String, { nullable: true })
  role?: MongooseSchema.Types.ObjectId
}

@InputType()
export class UpdateUserInput {
  @Field(() => String, { nullable: true })
  _id: MongooseSchema.Types.ObjectId
  
  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => String, { nullable: true })
  username?: string

  @Field(() => String, { nullable: true })
  password?: string

  @Field(() => String, { nullable: true })
  role?: MongooseSchema.Types.ObjectId
}