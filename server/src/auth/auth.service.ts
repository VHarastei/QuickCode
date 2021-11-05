import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User, UserDocument } from 'src/users/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}
  async register(dto: CreateUserDto) {
    const emailInUse = await this.userModel.findOne({ email: dto.email });
    if (emailInUse) return new ForbiddenException('Email already in use');

    const user = await this.userModel.create(dto);

    return user;
  }
}
