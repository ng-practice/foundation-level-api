import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';

import { BooksService } from './lib/books.service';
import { Book } from './models/book';

@ApiUseTags('books')
@Controller('books')
export class BooksController {
  constructor(private _books: BooksService) {}

  @Get()
  all() {
    return this._books.getAll();
  }

  @Get(':isbn')
  single(@Param('isbn') isbn: string) {
    return this._books.getSingle(isbn);
  }

  @Post()
  create(@Body() book: Book) {
    return this._books.addOne(book);
  }

  @Delete(':isbn')
  remove(@Param('isbn') isbn: string) {
    return this._books.remove(isbn);
  }

  @Put('favor/:isbn')
  favor(@Param('isbn') isbn: string) {
    return this._books.favor(isbn);
  }

  @Put('disfavor/:isbn')
  disfavor(@Param('isbn') isbn: string) {
    return this._books.disfavor(isbn);
  }

  @Put('update/:isbn')
  update(@Body() book: Book) {
    return this._books.upsert(book);
  }
}
