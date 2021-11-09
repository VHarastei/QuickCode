import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly sectionService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.sectionService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.sectionService.findAll();
  }

  @Get('/profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Req() req) {
    return this.sectionService.getProfile(req.user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sectionService.findOne(id);
  }
}
