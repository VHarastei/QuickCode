import { Lesson } from 'src/lesson/entities/lesson.entity';
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';

@Entity()
export class Section {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Lesson, (lesson) => lesson.section)
  lessons: Lesson[];
}
