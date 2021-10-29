import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Lesson, LessonSchema } from 'src/lessons/schemas/lesson.schema';
import { User, UserSchema } from 'src/users/schemas/user.schema';
import { AttemptsController } from './attempts.controller';
import { AttemptsService } from './attempts.service';
import { Attempt, AttemptSchema } from './schemas/attempt.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Lesson.name, schema: LessonSchema },
      { name: Attempt.name, schema: AttemptSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [AttemptsController],
  providers: [AttemptsService],
})
export class AttemptsModule {}
