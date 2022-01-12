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

  async findAll() {
    return this.repository.find();
  }

  async create(filmDto: CreateFilmDto, create: boolean) {
    if (create) {
      const film = this.repository.create({ ...filmDto });
      return this.repository.save(film);
    } else {
      this.repository
        .createQueryBuilder()
        .update(Film)
        .set(filmDto)
        .where({ image: filmDto.image })
        .execute();
    }
  }

  async delete(image: string) {
    this.repository.delete({ image });
  }
}
