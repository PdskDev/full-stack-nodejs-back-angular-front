import { ActivatedRoute, Router } from '@angular/router';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private bookService: BooksService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.bookService.getBookById(this.getId).subscribe((result) => {
      this.updateForm.setValue({
        name: result['name'],
        price: result['price'],
        description: result['description'],
      });
    });

    this.updateForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: [''],
    });
  }
  ngOnInit() {}

  onUpdate(): any {
    this.bookService.updateBook(this.getId, this.updateForm.value).subscribe(
      () => {
        console.log('Book updated successfully');
        this.ngZone.run(() => this.router.navigateByUrl('/list-books'));
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
