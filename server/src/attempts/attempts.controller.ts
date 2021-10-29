import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateAttemptDto } from './dto/create-attempt.dto';
import { AttemptsService } from './attempts.service';

@Controller('attempts')
export class AttemptsController {
  constructor(private readonly sectionService: AttemptsService) {}

  @Post()
  create(@Body() createAttemptDto: CreateAttemptDto) {
    return this.sectionService.create(createAttemptDto);
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
