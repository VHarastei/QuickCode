import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { LessonsService } from './lessons.service';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonService: LessonsService) {}

  @Post()
  create(@Body() createLessonDto: CreateLessonDto) {
    return this.lessonService.create(createLessonDto);
  }

  @Get()
  findAll() {
    return this.lessonService.findAll();
  }

  @Get('/random/:sectionId')
  findRandom(@Param('sectionId') sectionId: string) {
    return this.lessonService.findRandom(sectionId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonService.findOne(id);
  }
}
