import { Attempt } from './attempt/entities/attempt.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Section } from './section/entities/section.entity';
import { Lesson } from './lesson/entities/lesson.entity';
import { SectionModule } from './section/section.module';
import { LessonModule } from './lesson/lesson.module';
import { UserModule } from './user/user.module';
import { AttemptModule } from './attempt/attempt.module';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'quickcode',
      entities: [Section, Lesson, Attempt, User],
      synchronize: true,
    }),
    SectionModule,
    LessonModule,
    UserModule,
    AttemptModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
