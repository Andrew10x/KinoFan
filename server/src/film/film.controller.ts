import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateFilmDto } from './create-film.dto';
import { Film } from './film.entity';
import { FilmService } from './film.service';

@Controller('film')
export class FilmController {
  constructor(private readonly service: FilmService) {}

  @Get(':name')
  async findFilm(@Param('name') name: string): Promise<Film> {
    return this.service.findOne(name);
  }

  @Post()
  async createFilm(@Body() filmDto: CreateFilmDto) {
    return this.service.create(filmDto)
  }
}
