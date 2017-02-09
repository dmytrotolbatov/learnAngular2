import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Response} from '@angular/http';

import {PhoneBookService} from "../phonebook.service";

@Component({
  selector: "phone-book-edit",
  template:`
    <input type="text" name="firstName" placeholder="{{user.firstName}}" value="{{user.firstName}}" [(ngModel)]="firstName"/>
    <input type="text" name="secondName" placeholder="{{user.secondName}}" value="{{user.secondName}}" [(ngModel)]="secondName"/>
    <input type="text" name="phone" placeholder="{{user.phone}}" value="{{user.phone}}" [(ngModel)]="phone"/>
    <input type="text" name="address" placeholder="{{user.address}}" value="{{user.address}}" [(ngModel)]="address"/>
    <button (click)="edit(firstName, secondName, phone, address)">Save</button>
`
})

export class PhoneBookEditComponent implements OnInit{
  private userId: string;
  private newUser = {
    firstName: '',
    secondName: '',
    phone: '',
    address: ''
  };
  private user = {};


  constructor (private route: ActivatedRoute, private phonebookService: PhoneBookService){
    this.route.params.subscribe((params: Params) => this.userId = params['id']);
  }

  edit (firstName: string, secondName: string, phone: string, address: string) {
    this.newUser.firstName = firstName;
    this.newUser.secondName = secondName;
    this.newUser.phone = phone;
    this.newUser.address = address;
    this.phonebookService.edit(this.newUser, this.userId).subscribe((result) => alert('Done!') );
  }

  ngOnInit(){
    this.phonebookService.view(this.userId).subscribe((data: Response) => {
      this.user = data.json();
    });
  }
}
