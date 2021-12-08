import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmService } from './film.service';
import { FilmController } from './film.controller';
import { Film } from './film.entity';

@Module({
  providers: [FilmService],
  controllers: [FilmController],
  exports: [FilmService],
  imports: [TypeOrmModule.forFeature([Film])],
})
export class FilmModule {}
