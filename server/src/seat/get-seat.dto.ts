import { IsString } from 'class-validator';

export class GetSeatDto {
  @IsString()
  film: string;

  @IsString()
  date: string;

  @IsString()
  time: string;
}
