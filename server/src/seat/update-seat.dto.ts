import { IsString, IsNumber } from 'class-validator';

export class UpdateSeatDto {
  @IsString()
  film: string;

  @IsString()
  date: string;

  @IsString()
  time: string;

  @IsNumber()
  row: number;

  @IsNumber()
  seat: number;
}
