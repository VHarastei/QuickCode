import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Section } from './section/entities/section.entity';
import { Lesson } from './lesson/entities/lesson.entity';
import { SectionModule } from './section/section.module';
import { LessonModule } from './lesson/lesson.module';
import { AttemptModule } from './attempt/attempt.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'quickcode',
      entities: [Section, Lesson],
      synchronize: true,
    }),
    SectionModule,
    LessonModule,
    AttemptModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
