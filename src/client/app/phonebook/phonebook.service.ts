import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';

import {Person} from "./person";

@Injectable()
export class PhoneBookService {
private url = "http://589b1131bc99bf120037b98c.mockapi.io/api/v1/phones";

  constructor(private http: Http){}


  fetchAll(){
    return this.http.get(this.url);
  }

  view(id:string){
    return this.http.get(`${this.url}/${id}`);
  }

  create(item: Person){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(item);
    return this.http.post(this.url, body, options)
      .map((res:Response) => res.json());
  }

  edit(item: Person, id: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(item);
    return this.http.put(`${this.url}/${id}`, body, options)
      .map((res:Response) => res.json());
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.url}/${id}`)
      .map((res:Response) => res.json());
  }
}
