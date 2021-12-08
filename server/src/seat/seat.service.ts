import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSeatDto } from './create-seat.dto';
import { Seat } from './seat.entity';
import { GetSeatDto } from './get-seat.dto';
import { UpdateSeatDto } from './update-seat.dto';

@Injectable()
export class SeatService {
  constructor(
    @InjectRepository(Seat) private readonly repository: Repository<Seat>,
  ) {}

  async create(seatDtos: CreateSeatDto[]) {
    for (const seatDto of seatDtos) {
      const seat = this.repository.create({ ...seatDto });
      this.repository.save(seat);
    }
  }

  async find(query: GetSeatDto) {
    const { film, date, time } = query;
    return this.repository.find({ film, date, time });
  }

  async update(seatDtos: UpdateSeatDto[]) {
    for (const dto of seatDtos) {
      const { film, date, time, row, seat } = dto;
      const foundSeat = await this.repository.find({
        film,
        date,
        time,
        row,
        seat,
      });
      const newValue = {...foundSeat[0], status: 'taken'} as Seat;
      this.repository.update(foundSeat[0].id, newValue)
    }
  }
}
