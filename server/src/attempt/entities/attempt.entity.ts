import { Lesson } from 'src/lesson/entities/lesson.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Attempt {
  @PrimaryColumn()
  id: string;

  @Column()
  accuracy: number;

  @Column()
  wpm: number;

  @Column()
  time: number;

  @Column()
  errors: number;

  @ManyToOne(() => Lesson)
  @JoinColumn({ name: 'lessonId' })
  lesson: Lesson;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;
}