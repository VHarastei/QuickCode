import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request, Response } from 'express';
import { OAuth2Client } from 'google-auth-library';
import * as jwt from 'jsonwebtoken';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/users/schemas/user.schema';
import { GoogleLoginDto } from './dto/google-login.dto';
const client = new OAuth2Client(
  '192216114574-6vvglitrjul91ksp3mn462c5ou95n0ft.apps.googleusercontent.com',
);

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}
  async getMe(request: Request) {
    const { _id } = jwt.verify(request.cookies['token'], process.env.JWT_LOGIN);
    return this.userModel.findOne({ _id }).select('-attempts');
  }

  async googleLogin(dto: GoogleLoginDto, response: Response) {
    const OAuthResponse = await client.verifyIdToken({
      idToken: dto.tokenId,
      audience:
        '192216114574-6vvglitrjul91ksp3mn462c5ou95n0ft.apps.googleusercontent.com',
    });
    const payloadUser = OAuthResponse.getPayload();
    //console.log(payloadUser);

    const user = await this.userModel
      .findOne({ email: payloadUser.email })
      .select('-attempts');

    if (user) {
      const token = jwt.sign({ _id: user._id }, process.env.JWT_LOGIN, {
        expiresIn: '7d',
      });
      console.log('login', token);
      response.cookie('token', token);

      //return { user, token };
      return user;
    } else {
      const newUser = await this.userModel.create({
        googleId: payloadUser.sub,
        email: payloadUser.email,
        name: payloadUser.name,
        imageUrl: payloadUser.picture,
      });

      const token = jwt.sign({ _id: newUser._id }, process.env.JWT_LOGIN, {
        expiresIn: '7d',
      });
      console.log('register', token);
      response.cookie('token', token);
      //return { user, token };
      return user;
    }
  }
}
