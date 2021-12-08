import { IsNumber, IsString } from 'class-validator';

export class CreateFilmDto {
  @IsString()
  name: string;

  @IsString()
  image: string;

  @IsString()
  originalName: string;

  @IsString()
  director: string;

  @IsString()
  language: string;

  @IsString()
  genre: string;

  @IsNumber()
  duration: number;

  @IsString()
  studio: string;

  @IsString()
  description: string;
}
