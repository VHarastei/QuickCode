import { LessonDocument } from './../lessons/schemas/lesson.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lesson } from 'src/lessons/schemas/lesson.schema';
import { User, UserDocument } from 'src/users/schemas/user.schema';
import { CreateAttemptDto } from './dto/create-attempt.dto';
import { Attempt, AttemptDocument } from './schemas/attempt.schema';

@Injectable()
export class AttemptsService {
  constructor(
    @InjectModel(Attempt.name)
    private readonly attemptModel: Model<AttemptDocument>,
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    @InjectModel(Lesson.name)
    private readonly lessonModel: Model<LessonDocument>,
  ) {}

  async create(
    createAttemptDto: CreateAttemptDto,
    reqUser: User & { _id: any },
  ): Promise<Attempt> {
    createAttemptDto.user = reqUser._id;
    const createdAttempt = await this.attemptModel.create(createAttemptDto);

    await this.userModel.findByIdAndUpdate(
      createAttemptDto.user,
      { $push: { attempts: createdAttempt._id } },
      { new: true, useFindAndModify: false },
    );

    await this.lessonModel.findByIdAndUpdate(
      createAttemptDto.lesson,
      { $push: { attempts: createdAttempt._id } },
      { new: true, useFindAndModify: false },
    );

    return createdAttempt;
  }

  async findAll(): Promise<Attempt[]> {
    return this.attemptModel.find().exec();
  }

  async findOne(id: string): Promise<Attempt> {
    return this.attemptModel.findById(id).populate('section').exec();
  }
}
