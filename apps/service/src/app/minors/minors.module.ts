import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'

import { Minor, MinorSchema } from './model/minors.model'
import { MinorsService } from './minors.service';
import { MinorsResolver } from './minors.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Minor.name, schema: MinorSchema }]),
  ],
  providers: [MinorsService, MinorsResolver]
})
export class MinorsModule {}
