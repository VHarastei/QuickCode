import { LessonsModule } from './lessons/lessons.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SectionsModule } from './sections/sections.module';
import { AttemptsModule } from './attempts/attempts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.tmc5w.mongodb.net/quickcode?retryWrites=true&w=majority',
    ),
    SectionsModule,
    LessonsModule,
    AttemptsModule,
    UsersModule,
  ],
})
export class AppModule {}
