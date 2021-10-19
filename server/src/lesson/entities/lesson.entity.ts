import { Attempt } from 'src/attempt/entities/attempt.entity';
import { Section } from 'src/section/entities/section.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Lesson {
  @PrimaryColumn('varchar', { nullable: false, unique: true, primary: true })
  id: string;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  difficulty: 'easy' | 'medium' | 'hard';

  @Column()
  lines: number;

  @Column()
  source: string;

  @Column()
  sourceCode: string;

  @ManyToOne(() => Section)
  @JoinColumn({ name: 'sectionId' })
  section: Section;

  @OneToMany(() => Attempt, (attempt) => attempt.lesson)
  attempts: Attempt[];
}
