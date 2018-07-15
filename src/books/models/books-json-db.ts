import { Book } from './book';

export interface BooksJsonDB {
  [guid: string]: Book;
}
