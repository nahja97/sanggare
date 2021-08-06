import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'

import { Type, TypeSchema } from './model/types.model'
import { TypesService } from './types.service';
import { TypesResolver } from './types.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Type.name, schema: TypeSchema }]),
  ],
  providers: [TypesService, TypesResolver]
})
export class TypesModule {}
