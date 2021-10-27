import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSectionDto } from './dto/create-section.dto';
import { Section, SectionDocument } from './schemas/section.schema';

@Injectable()
export class SectionsService {
  constructor(
    @InjectModel(Section.name)
    private readonly sectionModel: Model<SectionDocument>,
  ) {}

  async create(createSectionDto: CreateSectionDto): Promise<Section> {
    const createdSection = await this.sectionModel.create(createSectionDto);
    return createdSection;
  }

  async findAll(): Promise<Section[]> {
    return this.sectionModel.find().exec();
  }
}
