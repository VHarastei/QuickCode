import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Section } from 'src/sections/schemas/section.schema';

export type LessonDocument = Lesson & Document;

@Schema({ versionKey: false })
export class Lesson {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  code: string;

  @Prop({ required: true })
  difficulty: 'easy' | 'medium' | 'hard';

  @Prop({ required: true })
  lines: number;

  @Prop({ required: true })
  source: string;

  @Prop({ required: true })
  sourceCode: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Section' })
  section: Section;
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
