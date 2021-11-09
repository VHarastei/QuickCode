import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateAttemptDto } from './dto/create-attempt.dto';
import { AttemptsService } from './attempts.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('attempts')
export class AttemptsController {
  constructor(private readonly sectionService: AttemptsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createAttemptDto: CreateAttemptDto, @Req() req) {
    return this.sectionService.create(createAttemptDto, req.user);
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
