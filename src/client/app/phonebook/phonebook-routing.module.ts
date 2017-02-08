import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PhoneBookComponent } from './phonebook-index/phonebook.index.component';
import {PhoneBookViewComponent} from "./phonebook-view/phone-book-view.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'phonebook', component: PhoneBookComponent },
      { path: 'phonebook/view/:id', component: PhoneBookViewComponent }
    ])
  ],
  exports: [RouterModule]
})
export class PhoneBookRoutingModule { }
