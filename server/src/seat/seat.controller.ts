import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { CreateSeatDto } from './create-seat.dto';
import { GetSeatDto } from './get-seat.dto';
import { SeatService } from './seat.service';
import { Seat } from './seat.entity';
import { UpdateSeatDto } from './update-seat.dto';

@Controller('seat')
export class SeatController {
  constructor(private readonly service: SeatService) {}

  @Post()
  async addSeat(@Body() seatDtos: CreateSeatDto[]) {
    return this.service.create(seatDtos);
  }

  @Get()
  async getSeats(@Query() query: GetSeatDto): Promise<Seat[]> {
    return this.service.find(query);
  }

  @Post('update')
  async updateSeats(@Body() body: UpdateSeatDto[]) {
    return this.service.update(body);
  }
}
