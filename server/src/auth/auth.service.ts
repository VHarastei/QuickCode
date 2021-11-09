import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Response } from 'express';
import { OAuth2Client } from 'google-auth-library';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/users/schemas/user.schema';
import { GoogleLoginDto } from './dto/google-login.dto';
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async googleLogin(dto: GoogleLoginDto, response: Response) {
    const OAuthResponse = await client.verifyIdToken({
      idToken: dto.tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payloadUser = OAuthResponse.getPayload();

    const user = await this.userModel
      .findOne({ email: payloadUser.email })
      .select('-attempts');

    if (user) {
      const token = this.jwtService.sign({ _id: user._id });

      response.cookie('token', token);
      return user;
    } else {
      const newUser = await this.userModel.create({
        googleId: payloadUser.sub,
        email: payloadUser.email,
        name: payloadUser.name,
        imageUrl: payloadUser.picture,
      });

      const token = this.jwtService.sign({ _id: newUser._id });

      response.cookie('token', token);
      return user;
    }
  }
}
