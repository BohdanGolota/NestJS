import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Inject,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map, Observable } from 'rxjs';
import { FindNewsDto } from '../dto/find-news.dto';
import { NewsDto } from '../dto/news.dto';
import { FilterNewsDto } from '../dto/filter-news.dto';

@Controller('news')
export class NewsController {
  constructor(@Inject('NEWS_SERVICE') private readonly client: ClientProxy) {
  }

  // Get all published news
  @Get('/list')
  @UsePipes(new ValidationPipe({ transform: true }))
  getNewsList(@Query() filterNewsDto?: FilterNewsDto): Observable<any> {
    console.log('get works');
    return this.client.send({ cmd: 'get_news_list' }, filterNewsDto? filterNewsDto: '');
  }

  // Get a single news item by ID
  @Get('/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
  findNews(@Param() params: FindNewsDto): Observable<any> {
    return this.client.send({ cmd: 'find_news' }, { id: params.id }).pipe(
      map((response) => {
        if (response.statusCode === HttpStatus.NOT_FOUND) {
          throw new NotFoundException(response.message);
        }
        return response;
      }),
    );
  }

  // Create a new news item
  @Post('/item')
  @UsePipes(new ValidationPipe({ transform: true }))
  createNews(@Body() createNewsDto: NewsDto): Observable<any> {
    return this.client.send({ cmd: 'create_news' }, createNewsDto);
  }

  // Update a news item
  @Put('/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
  updateNews(@Param('id') id: number, @Body() updateNewsDto: NewsDto): Observable<any> {
    return this.client.send({ cmd: 'update_news' }, { id, ...updateNewsDto }).pipe(
      map((response) => {
        if (response.statusCode === HttpStatus.NOT_FOUND) {
          throw new NotFoundException(response.message);
        }
        return response;
      }),
    );
  }

  // Delete a news item
  @Delete('/:id')
  remove(@Param('id') id: number): Observable<any> {
    return this.client.send({ cmd: 'remove_news' }, { id }).pipe(
      map((response) => {
        if (response.statusCode === HttpStatus.NOT_FOUND) {
          throw new NotFoundException(response.message);
        }
        return response;
      }),
    );
  }
}
