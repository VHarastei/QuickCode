import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Lesson } from 'src/lessons/schemas/lesson.schema';
import { User } from 'src/users/schemas/user.schema';

export type AttemptDocument = Attempt & Document;

@Schema({ versionKey: false })
export class Attempt {
  @Prop({ required: true })
  accuracy: number;

  @Prop({ required: true })
  wpm: number;

  @Prop({ required: true })
  time: number;

  @Prop({ required: true })
  numberOfErrors: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' })
  lesson: Lesson;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const AttemptSchema = SchemaFactory.createForClass(Attempt);
