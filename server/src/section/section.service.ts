import { Section } from './entities/section.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSectionDto } from './dto/create-section.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';

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
      .leftJoinAndSelect('section.lessons', 'lesson')
      .where('section.id = :id', { id })
      .getOne();
    if (!data) {
      throw new NotFoundException('Section not found');
    }
    return data;
  }
}
