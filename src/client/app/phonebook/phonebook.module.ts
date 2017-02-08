import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {RouterModule}   from '@angular/router';

import {PhoneBookComponent}        from './phonebook-index/phonebook.index.component';
import {PhoneBookRoutingModule} from "./phonebook-routing.module";
import {PhoneBookViewComponent} from "./phonebook-view/phone-book-view.component";
import {PhoneBookService} from "./phonebook.service";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    PhoneBookRoutingModule
  ],
  declarations: [
    PhoneBookComponent,
    PhoneBookViewComponent
  ],
  providers: [PhoneBookService],
  bootstrap: [PhoneBookComponent]
})
export class PhoneBookModule {
}
