import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsers } from 'src/dto/create-users.dto';
import { updateUser } from 'src/dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  finAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  createUsers(@Body() Body: CreateUsers) {
    return this.userService.createUser(Body);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() body: updateUser) {
    return this.userService.updateUser(id, body);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
