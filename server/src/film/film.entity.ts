import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Film {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  originalName: string;

  @Column()
  director: string;

  @Column()
  language: string;

  @Column()
  genre: string;

  @Column()
  duration: number;

  @Column()
  studio: string;

  @Column()
  description: string;
}
