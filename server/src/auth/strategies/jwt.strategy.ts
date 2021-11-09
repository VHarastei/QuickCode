import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { Model } from 'mongoose';
import { Strategy } from 'passport-jwt';
import { User, UserDocument } from './../../users/schemas/user.schema';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {
    super({
      jwtFromRequest: (request: Request) => request.cookies['token'],
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { _id: string }) {
    const user = await this.userModel
      .findOne({ _id: payload._id })
      .select('-attempts');

    if (!user) {
      throw new UnauthorizedException('You cannot access this page');
    }

    return user;
  }
}
