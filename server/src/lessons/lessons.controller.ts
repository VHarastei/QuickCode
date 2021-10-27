import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { LessonsService } from './lessons.service';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly sectionService: LessonsService) {}

  @Post()
  create(@Body() createLessonDto: CreateLessonDto) {
    return this.sectionService.create(createLessonDto);
  }

  @Get()
  findAll() {
    return this.sectionService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.sectionService.findOne(id);
  // }
}
