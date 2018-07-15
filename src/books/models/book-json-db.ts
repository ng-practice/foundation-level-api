import { Book } from './book';

export interface TasksJsonDB {
  [guid: string]: Book;
}
