import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'
import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
@Schema()
export class Single {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId

    @Field(() => String)
    @Prop({index: {unique: true, dropDups: true}})
    name: string

    @Field(() => Number!)
    @Prop({default: 0})
    work_hour: number

    @Field(() => Number!)
    @Prop({default: 0})
    weight_of_labour: number

    @Field(() => Number!)
    @Prop({default: 0})
    overhead_cost: number
}

export type SingleDocument = Single & Document

export const SingleSchema = SchemaFactory.createForClass(Single)