import { InjectModel } from '@nestjs/mongoose';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { User, UserDocument } from 'src/users/schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {
    super({ usernameField: 'email', passwordField: 'googleId' });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isPasswordValid = password === user.googleId;

    if (!isPasswordValid) {
      return new UnauthorizedException('Google authentication failed');
    }

    return user;
  }
}
