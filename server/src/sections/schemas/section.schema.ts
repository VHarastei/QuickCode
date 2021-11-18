import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Lesson } from 'src/lessons/schemas/lesson.schema';

export type SectionDocument = Section & Document;

@Schema({ versionKey: false })
export class Section {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  route: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }] })
  lessons: Lesson[];
}

export const SectionSchema = SchemaFactory.createForClass(Section);
