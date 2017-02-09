import { Component} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {PhoneBookService} from "../phonebook.service";

@Component({
  selector: "phone-book-create",
  template:`
    <input type="text" name="firstName" placeholder="first name" [(ngModel)]="firstName"/>
    <input type="text" name="secondName" placeholder="last name" [(ngModel)]="secondName"/>
    <input type="text" name="phone" placeholder="phone" [(ngModel)]="phone"/>
    <input type="text" name="address" placeholder="address" [(ngModel)]="address"/>
    <button (click)="add(firstName, secondName, phone, address)">Save</button>
`
})

export class PhoneBookCreateComponent{
  private userId: string;
  private newUser = {
    firstName: '',
    secondName: '',
    phone: '',
    address: ''
  };

  constructor (private route: ActivatedRoute, private phonebookService: PhoneBookService){
    this.route.params.subscribe((params: Params) => this.userId = params['id']);
  }

  add (firstName: string, secondName: string, phone: string, address: string) {
    this.newUser.firstName = firstName;
    this.newUser.secondName = secondName;
    this.newUser.phone = phone;
    this.newUser.address = address;
    this.phonebookService.create(this.newUser).subscribe((result) => alert('Done!') );
  }
}
