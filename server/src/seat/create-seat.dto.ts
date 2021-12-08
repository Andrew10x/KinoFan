import { IsNumber, IsString } from 'class-validator';

export class CreateSeatDto {
  @IsString()
  film: string;

  @IsString()
  date: string;

  @IsString()
  time: string;

  @IsNumber()
  hall: number;
  
  @IsNumber()
  row: number;

  @IsNumber()
  seat: number;

  @IsNumber()
  price: number;

  @IsString()
  status: string;
}
