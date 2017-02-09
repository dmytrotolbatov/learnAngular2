import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';

import {PhoneBookService} from "../phonebook.service";

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <button [routerLink]="['create']">Add new user</button>
   <table>
  <tr>
   <th>ID</th>
   <th>Name</th>
   <th>Phone</th>
  </tr>

<tr *ngFor="let user of users">
<td>{{user.id}}</td>
<td>{{getFullName(user.firstName, user.secondName)}}</td>
<td>{{user.phone}}</td>
<button [routerLink]="['view',user.id]">View</button>
<button [routerLink]="['edit',user.id]">Update</button>
<button (click)="deleteUser(user.id)">Delete</button>
</tr>
</table> 
  `,
  styles: [`
  td{
    text-align: center;
    padding: 10px;
  }
`]
})

export class PhoneBookComponent implements OnInit{
  private title = 'PhoneBook';
  private userId: string;
  private user = {};
  private users: any[] = [];

  constructor(private route: ActivatedRoute, private phonebookService: PhoneBookService){
    this.route.params.subscribe((params: Params) => this.userId = params['id']);
  }

  getFullName (firstName: string, lastName: string){
    return `${firstName} ${lastName}`;
  }

  deleteUser (id: string) {
    this.phonebookService.deleteUser(id).subscribe((data: Response) => {
      this.loadData();
      alert('Done!');
    });
  }

  ngOnInit(){
    this.loadData();
  }

  loadData (){
    this.phonebookService.fetchAll().subscribe((data: Response) => {
      this.users = data.json();
    });
  }
}
