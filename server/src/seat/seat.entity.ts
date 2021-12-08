import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Seat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  film: string;

  @Column()
  date: string;

  @Column()
  time: string;

  @Column()
  hall: number;

  @Column()
  row: number;

  @Column()
  seat: number;

  @Column()
  price: number;

  @Column()
  status: string;
}
