import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Phrase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;
}
