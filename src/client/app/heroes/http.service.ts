/*import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class User{
  id: string;
  name: string;
}

@Injectable()
export class HttpService {
  constructor (private http: Http) {

  }

  getUsers() : Observable<User[]>{
    return this.http.get('http://5891f3beb1c4481200f6c296.mockapi.io/heroes')
      .map((resp:Response) => {
        let usersList = resp.json().data;
        console.log(usersList);
        let users :User[] = [];
        for(let index in usersList){
          console.log(usersList[index]);
          let user = usersList[index];
          users.push({id: user.id, name: user.name});
        }
        return users;
      });
  }
}*/


import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';

export class User{
  id: string;
  name: string;
}

@Injectable()
export class HttpService{

  constructor(private http: Http){ }

  getData(){
    return this.http.get('http://5891f3beb1c4481200f6c296.mockapi.io/heroes');
  }

  /*postData(item){
    console.log(item);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // // let body = JSON.stringify(item);
    // // let body = item.toString();
    // return this.http.post('http://5891f3beb1c4481200f6c296.mockapi.io/heroes', {"name":item}, options);
     return this.http.post('http://5891f3beb1c4481200f6c296.mockapi.io/heroes', {"name":item}, options)
       .subscribe((res:Response) => res.json());
  }*/

  putData(item){
    console.log(item);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    const url = "http://5891f3beb1c4481200f6c296.mockapi.io";
    // // let body = JSON.stringify(item);
    // // let body = item.toString();
    // return this.http.post('http://5891f3beb1c4481200f6c296.mockapi.io/heroes', {"name":item}, options);
    return this.http.put(`${url}/heroes/60`, {"name":item}, options)
      .map((res:Response) => res.json());
      // .subscribe((res:Response) => res.json());
  }

}
