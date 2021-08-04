import { Schema as MongooseSchema } from 'mongoose'
import { Field, InputType } from '@nestjs/graphql'

import { Role } from '../roles/model/roles.model'

@InputType()
export class ListUserAuth {
  @Field(() => String)
  username: string

  @Field(() => String)
  password: string
}

@InputType()
export class RefreshTokenAuth {
  @Field(() => String)
  refresh_token: string

  @Field(() => String)
  access_token: string
}

@InputType()
export class AccessTokenPayload {
  @Field(() => String)
  _id: any

  @Field(() => String)
  name: string

  @Field(() => String)
  username: string

  @Field(() => String)
  role: MongooseSchema.Types.ObjectId | Role
}

@InputType()
export class RefreshTokenPayload {
  @Field(() => String)
  _id: any

  @Field(() => String)
  access_token: string
}