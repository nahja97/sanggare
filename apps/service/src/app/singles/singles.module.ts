import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'

import { Single, SingleSchema } from './model/singles.model'
import { SinglesService } from './singles.service';
import { SinglesResolver } from './singles.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Single.name, schema: SingleSchema }]),
  ],
  providers: [SinglesService, SinglesResolver]
})
export class SinglesModule {}
