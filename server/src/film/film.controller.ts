import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CreateFilmDto } from './create-film.dto';
import { Film } from './film.entity';
import { FilmService } from './film.service';

@Controller('film')
export class FilmController {
  constructor(private readonly service: FilmService) {}

  @Get()
  async findAllFilms() {
    return this.service.findAll();
  }

  @Get(':name')
  async findFilm(@Param('name') name: string): Promise<Film> {
    return this.service.findOne(name);
  }

  @Post()
  async createFilm(@Body() filmDto: CreateFilmDto) {
    return this.service.create(filmDto, true);
  }

  @Post('update')
  async updateFilm(@Body() filmDto: CreateFilmDto) {
    console.log('here');
    return this.service.create(filmDto, false);
  }

  @Delete()
  async deleteFilm(@Query('id') id: string) {
    this.service.delete(id);
  }
}
