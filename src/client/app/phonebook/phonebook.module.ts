import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import {PhoneBookComponent}        from './phonebook-index/phonebook.index.component';
import {PhoneBookRoutingModule} from "./phonebook-routing.module";
import {PhoneBookViewComponent} from "./phonebook-view/phone-book-view.component";
import {PhoneBookService} from "./phonebook.service";
import {PhoneBookCreateComponent} from "./phonebook-add/phonebook-create.component";
import {PhoneBookEditComponent} from "./phonebook-edit/phonebook-edit.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    PhoneBookRoutingModule
  ],
  declarations: [
    PhoneBookComponent,
    PhoneBookViewComponent,
    PhoneBookCreateComponent,
    PhoneBookEditComponent
  ],
  providers: [PhoneBookService],
  bootstrap: [PhoneBookComponent]
})

export class PhoneBookModule {
}
