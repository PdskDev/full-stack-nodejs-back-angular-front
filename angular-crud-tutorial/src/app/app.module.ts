import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddBookComponent } from './components/add-book/add-book.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    BookDetailsComponent,
    BooksListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
