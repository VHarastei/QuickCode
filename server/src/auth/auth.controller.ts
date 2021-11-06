import { Body, Controller, Post, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { GoogleLoginDto } from './dto/google-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  googleLogin(
    @Body() googleLoginDto: GoogleLoginDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.authService.googleLogin(googleLoginDto, response);
  }

  @Get()
  getMe(@Req() request: Request) {
    return this.authService.getMe(request);
  }
}
