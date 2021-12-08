import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeatController } from './seat.controller';
import { SeatService } from './seat.service';
import { Seat } from './seat.entity';

@Module({
  controllers: [SeatController],
  providers: [SeatService],
  imports: [TypeOrmModule.forFeature([Seat])]
})
export class SeatModule {}
