import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { SinglesModule } from './singles/singles.module';
import { AuthModule } from './auth/auth.module';
import { TypesModule } from './types/types.module';
import { MajorsModule } from './majors/majors.module';
import { MinorsModule } from './minors/minors.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/sanggare'),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      sortSchema: true,
      playground: true,
      debug: true,
    }),
    RolesModule,
    UsersModule,
    SinglesModule,
    AuthModule,
    TypesModule,
    MajorsModule,
    MinorsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
