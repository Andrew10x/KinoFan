import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFilmDto } from './create-film.dto';
import { Film } from './film.entity';

@Injectable()
export class FilmService {
  constructor(
    @InjectRepository(Film) private readonly repository: Repository<Film>,
  ) {}
  async findOne(name: string): Promise<Film> {
    return this.repository.findOne({ image: name });
  }

  async create(filmDto: CreateFilmDto) {
    const film = this.repository.create({ ...filmDto });
    return this.repository.save(film);
  }
}
