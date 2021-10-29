import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Attempt } from 'src/attempts/schemas/attempt.schema';

export type UserDocument = User & Document;

@Schema({ versionKey: false })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attempt' }] })
  attempts: Attempt[];
}

export const UserSchema = SchemaFactory.createForClass(User);