import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.userModel.create(createUserDto);
    return createdUser;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).populate('attempts').exec();
  }

  async getProfile(): Promise<any> {
    const userId = '61803b0d94d1ea7b489a62e0';
    const user = await this.userModel.findById(userId).populate('attempts');

    let totalTime = 0;
    const profile = {
      totalTime: '',
      totalLessons: user.attempts.length,
      topSpeed: 0,
      averageSpeed: 0,
      typingChart: [] as { lessonNumber: number; wpm: number }[],
    };

    user.attempts.forEach((attempt, index) => {
      totalTime += attempt.time;
      profile.topSpeed = Math.max(profile.topSpeed, attempt.wpm);
      profile.averageSpeed += Math.round(attempt.wpm / user.attempts.length);
      profile.typingChart.push({ lessonNumber: index + 1, wpm: attempt.wpm });
    });

    profile.totalTime = [
      (totalTime / 60 / 60).toFixed(0),
      ((totalTime / 60) % 60).toFixed(0),
      (totalTime % 60).toFixed(0),
    ]
      .join(':')
      .replace(/\b(\d)\b/g, '0$1');

    return profile;
  }
}
