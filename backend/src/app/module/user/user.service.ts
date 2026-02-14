import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: mongoose.Model<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const result = await this.userModel.create(createUserDto);
    return result;
  }
}
