import { Module } from '@nestjs/common';
import { join } from 'path';

import { BooksController } from './books.controller';
import { BooksService } from './lib/books.service';

// tslint:disable-next-line:no-var-requires
const JsonDB = require('node-json-db');

const database = join(__dirname, '..', '..', 'database');

@Module({
  controllers: [BooksController],
  providers: [
    {
      provide: BooksService,
      useValue: new BooksService(new JsonDB(`${database}/books`, true, true)),
    },
  ],
})
export class BooksModule {}
