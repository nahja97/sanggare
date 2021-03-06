import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'
import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
@Schema()
export class Role {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId

    @Field(() => String, {nullable: true})
    @Prop({index: {unique: true, dropDups: true}, nullable: true, required: false})
    name: string
}

export type RoleDocument = Role & Document

export const RoleSchema = SchemaFactory.createForClass(Role)