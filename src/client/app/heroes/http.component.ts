/*
import { Component, OnInit } from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from './http.service';
import {User} from './http.service';

@Component({
  selector: 'http-app',
  template: `
    <h1>{{title}}</h1>
    <ul>
                    <li *ngFor="let user of users">
                    <p>ID пользователя: {{user.id}}</p>
                    <p>Имя пользователя: {{user.name}}</p>
                    </li>
    </ul>
  `,
  providers: [HttpService]
})
export class HttpComponent implements OnInit{
  title = 'testing HTTP';
  users: User[]=[];
  constructor(private httpService: HttpService){}
  ngOnInit() {

    this.httpService.getUsers().subscribe((data)=>this.users = data);
  }
}
*/


import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from './http.service';
import {User} from './http.service';

@Component({
  selector: 'http-app',
  template: `
<div>
  <input type="text" name="item" [(ngModel)]="item"/>
  <button (click)="putData(item)">Save</button>
  <ul>
  <li *ngFor="let user of users">
  <p>ID пользователя: {{user.id}}</p>
  <p>Имя пользователя: {{user.name}}</p>
  </li>
  </ul>
</div>
`,
  providers: [HttpService]
})
export class HttpComponent implements OnInit {

  user: User;
  users: User[]=[];
  constructor(private httpService: HttpService){}


  /*postData(item) {
    // let item = {name:name};
    this.httpService.postData(item)
  }*/

  putData(item) {
    // let item = {name:name};
    this.httpService.putData(item).subscribe((result) => console.log(result) );
  }

  ngOnInit(){
    // this.httpService.getData().subscribe((data)=>this.users = data);
    this.httpService.getData().subscribe((data: Response) => this.users=data.json());
    // this.httpService.postData().subscribe((data: Response) => this.users=data.json());
  }
}
