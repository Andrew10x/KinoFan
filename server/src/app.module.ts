import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmModule } from './film/film.module';
import { Film } from './film/film.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'kinofan',
      entities: [Film],
      synchronize: true,
    }),
    FilmModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
