import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'

import { Major, MajorSchema } from './model/majors.model'
import { MajorsService } from './majors.service';
import { MajorsResolver } from './majors.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Major.name, schema: MajorSchema }]),
  ],
  providers: [MajorsService, MajorsResolver]
})
export class MajorsModule {}
