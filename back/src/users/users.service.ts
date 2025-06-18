import mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/users.schemas';
import { CreateUsers } from '../dto/create-users.dto';
import { updateUser } from 'src/dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: mongoose.Model<User>,
  ) {}

  async findAll() {
    return this.userModel.find();
  }

  async createUser(user: CreateUsers) {
    const nuevoUsuario = new this.userModel(user);
    return nuevoUsuario.save();
  }

  async findOne(id: string) {
    return this.userModel.findById(id);
  }

  async updateUser(id: string, user: updateUser) {
    return this.userModel.findByIdAndUpdate(id, user, { new: true });
  }

  async deleteUser(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
