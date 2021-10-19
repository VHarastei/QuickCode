import { Attempt } from 'src/attempt/entities/attempt.entity';
import { Injectable } from '@nestjs/common';
import { CreateAttemptDto } from './dto/create-attempt.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AttemptService {
  constructor(
    @InjectRepository(Attempt)
    private attemptRepository: Repository<Attempt>,
  ) {}

  create(dto: CreateAttemptDto) {
    return this.attemptRepository.save({
      accuracy: dto.accuracy,
      wpm: dto.wpm,
      time: dto.time,
      errors: dto.errors,
      lesson: { id: dto.lessonId },
      user: { id: 1 },
    });
  }

  findAll() {
    return `This action returns all attempt`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attempt`;
  }
}
