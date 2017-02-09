import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PhoneBookComponent } from './phonebook-index/phonebook.index.component';
import {PhoneBookViewComponent} from "./phonebook-view/phone-book-view.component";
import {PhoneBookCreateComponent} from "./phonebook-add/phonebook-create.component";
import {PhoneBookEditComponent} from "./phonebook-edit/phonebook-edit.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'phonebook', component: PhoneBookComponent },
      { path: 'phonebook/view/:id', component: PhoneBookViewComponent },
      { path: 'phonebook/create', component: PhoneBookCreateComponent },
      { path: 'phonebook/edit/:id', component: PhoneBookEditComponent },
    ])
  ],
  exports: [RouterModule]
})

export class PhoneBookRoutingModule { }
