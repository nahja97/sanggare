import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'

import { User, UserSchema } from './model/users.model'
import { Role, RoleSchema} from '../roles/model/roles.model'
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
  ],
  providers: [UsersService, UsersResolver]
})
export class UsersModule {}
