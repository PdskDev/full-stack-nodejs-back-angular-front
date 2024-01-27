import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

import { Book } from '../models/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  REST_API_URL: string = 'http://localhost:8000/api/books';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  addBook(book: Book): Observable<any> {
    return this.httpClient
      .post(this.REST_API_URL, book)
      .pipe(catchError(this.handleError));
  }

  getBooks() {
    return this.httpClient.get(this.REST_API_URL);
  }

  getBookById(id: any): Observable<any> {
    return this.httpClient
      .get(`${this.REST_API_URL}/${id}`, { headers: this.httpHeaders })
      .pipe(
        map((book: any) => {
          return book || {};
        }),
        catchError(this.handleError)
      );
  }

  updateBook(id: any, book: Book): Observable<any> {
    return this.httpClient
      .put(`${this.REST_API_URL}/${id}`, book, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  deleteBook(id: any): Observable<any> {
    return this.httpClient
      .delete(`${this.REST_API_URL}/${id}`, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
