import { Injectable } from '@nestjs/common';
import JsonDB from 'node-json-db';

import { Book } from '../models/book';
import { BooksJsonDB } from '../models/books-json-db';

@Injectable()
export class BooksService {
  constructor(private _booksDb: JsonDB) {}

  addOne(task: Book) {
    this._booksDb.push(`/${task.isbn}`, task);
  }

  getAll(): Book[] {
    const tasks: BooksJsonDB = this._booksDb.getData('/');
    return Object.keys(tasks).map(guid => tasks[guid]);
  }

  getSingle(guid: string): Book {
    return this._booksDb.getData(`/${guid}`);
  }

  upsert(book: Book) {
    this._booksDb.push(`/${book.isbn}`, book);
  }

  favor(guid: string) {
    this._booksDb.push(`/${guid}`, { isFavorite: true }, false);
  }

  disfavor(guid: string) {
    this._booksDb.push(`/${guid}`, { isFavorite: false }, false);
  }

  remove(guid: string) {
    this._booksDb.delete(`/${guid}`);
  }
}
