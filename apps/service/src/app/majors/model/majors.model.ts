import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'
import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
@Schema()
export class Major {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId

    @Field(() => String)
    @Prop({index: {unique: true, dropDups: true}})
    name: string
}

export type MajorDocument = Major & Document

export const MajorSchema = SchemaFactory.createForClass(Major)