import { Section } from './entities/section.entity';
import { Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return `This action returns a #${id} section`;
  }

  // update(id: number, updateSectionDto: UpdateSectionDto) {
  //   return `This action updates a #${id} section`;
  // }

  remove(id: number) {
    return `This action removes a #${id} section`;
  }
}
