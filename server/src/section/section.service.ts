import { Attempt } from 'src/attempt/entities/attempt.entity';
import { Section } from './entities/section.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSectionDto } from './dto/create-section.dto';
import { getRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { Lesson } from 'src/lesson/entities/lesson.entity';

@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(Section)
    private sectionRepository: Repository<Section>,
  ) {}

  create(dto: CreateSectionDto) {
    return this.sectionRepository.save({
      id: randomUUID(),
      name: dto.name,
      description: dto.description,
    });
  }

  findAll() {
    return this.sectionRepository.find();
  }

  async findOne(id: string) {
    const data = await this.sectionRepository
      .createQueryBuilder('section')
      .leftJoinAndSelect('section.lessons', 'lessons') //s
      //.leftJoinAndSelect('lessons.attempts', 'attempts')
      .where('section.id = :id', { id })
      .getOne();

    // interface NewLesson extends Lesson {
    //   avgAccuracy: number;
    // }
    // or Lesson & {avgAccuracy: number}

    await Promise.all(
      data.lessons.map(
        async (
          lesson: Lesson & {
            avgAccuracy: number;
          },
        ) => {
          const attempts = await getRepository(Attempt).find({
            where: { lesson: lesson.id },
          });
          let avgAccuracy = 0;
          attempts.forEach((item) => {
            avgAccuracy += item.accuracy / attempts.length;
          });
          lesson.avgAccuracy = avgAccuracy;
        },
      ),
    );

    if (!data) {
      throw new NotFoundException('Section not found');
    }
    return data;
  }
}
