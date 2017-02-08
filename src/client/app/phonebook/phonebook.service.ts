import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class PhoneBookService {
private url = "http://589b1131bc99bf120037b98c.mockapi.io/api/v1/phones";
  constructor(private http: Http){}


  fetchAll(){
    return this.http.get("http://589b1131bc99bf120037b98c.mockapi.io/api/v1/phones");
      // .map((res:Response) => res.json());
  }

  view(id){
    return this.http.get(`${this.url}/${id}`);
  }


}
