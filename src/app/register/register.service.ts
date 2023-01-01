import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseurl = 'http://localhost:3333/api/auth';
  token = localStorage.getItem('token');
  


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ${token}'
    }),
  };
  constructor(private client: HttpClient) { }

  async register(data: any):Promise<any>{
    console.log('Service Console of User Data',data);
    
    return await this.client.post( this.baseurl+ '/register',data,this.httpOptions).toPromise();

  }

}
