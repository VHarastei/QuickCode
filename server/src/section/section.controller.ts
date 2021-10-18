import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateSectionDto } from './dto/create-section.dto';
import { SectionService } from './section.service';

@Controller('sections')
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Post()
  create(@Body() createSectionDto: CreateSectionDto) {
    return this.sectionService.create(createSectionDto);
  }

  @Get()
  findAll() {
    return this.sectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sectionService.findOne(id);
  }
}
