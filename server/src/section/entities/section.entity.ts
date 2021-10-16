import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Section {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;
}
