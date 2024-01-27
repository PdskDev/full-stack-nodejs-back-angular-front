import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { BooksService } from 'src/app/services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  bookForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private bookService: BooksService
  ) {
    this.bookForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: [''],
    });
  }

  ngOnInit() {}

  onSubmit(): any {
    this.bookService.addBook(this.bookForm.value).subscribe(
      () => {
        console.log('Book added successfully');
        this.ngZone.run(() => this.router.navigateByUrl('/list-books'));
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
