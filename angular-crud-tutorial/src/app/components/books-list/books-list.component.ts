import { Component, OnInit } from '@angular/core';

import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
  listOfBooks: any = [];

  constructor(private bookService: BooksService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe((books) => {
      console.log(books);
      this.listOfBooks = books;
    });
  }

  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Do you are sure to delete this book ?')) {
      this.bookService.deleteBook(id).subscribe((result) => {
        this.listOfBooks.slice(i, 1);
      });
    }
  }
}
