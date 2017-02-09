import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Response} from '@angular/http';

import {PhoneBookService} from "../phonebook.service";

@Component({
  selector: "phone-book-view",
  template:`
    <table>
      <tr>
        <th>ID</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Phone</th>
        <th>Address</th>
        <th>Number</th>
      </tr>
      
      <tr>
        <td>{{user.id}}</td>
        <td>{{user.firstName}}</td>
        <td>{{user.secondName}}</td>
        <td>{{user.phone}}</td>
        <td>{{user.address}}</td>
        <td>{{user.createdAt}}</td>
      </tr>
    </table>
`
})

export class PhoneBookViewComponent implements OnInit{
  private userId: string;
  private user = {};

  constructor (private route: ActivatedRoute, private phonebookService: PhoneBookService){
    this.route.params.subscribe((params: Params) => this.userId = params['id']);
  }

  ngOnInit(){
    this.phonebookService.view(this.userId).subscribe((data: Response) => {
      this.user = data.json();
    });
  }
}
