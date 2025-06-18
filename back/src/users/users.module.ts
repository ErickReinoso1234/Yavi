import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersService } from './users.service';
import { User, userSchema } from 'src/schemas/users.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: userSchema,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
