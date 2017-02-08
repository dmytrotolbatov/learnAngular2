import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import {PhoneBookService} from "../phonebook.service";

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
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
<button>Update</button>
<button>Delete</button>
</tr>
</table> 
  `,
  providers: [PhoneBookService]
})
export class PhoneBookComponent implements OnInit{
  title = 'PhoneBook';

  users: any[] = [];

  constructor(private phonebookService: PhoneBookService){}

  getFullName (firstName, lastName){
    return `${firstName} ${lastName}`;
  }

  ngOnInit(){
    // this.httpService.getData().subscribe((data)=>this.users = data);
    this.phonebookService.fetchAll().subscribe((data: Response) => {
      this.users = data.json();
      console.log(this.users);
    });
    // this.httpService.postData().subscribe((data: Response) => this.users=data.json());
  }
}



