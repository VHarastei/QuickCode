import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
  getProfile() {
    return this.sectionService.getProfile();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sectionService.findOne(id);
  }
}
