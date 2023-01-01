import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseurl = 'http://localhost:3333/api/auth';
  token = localStorage.getItem('token');
  loading = true;
 
  errorMessage = '';


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ${token}'
    }),
  };
  constructor(private client: HttpClient,private router: Router) { }

  async login(data: any):Promise<any>{
   

    console.log('Service Console of User Data',data);
    
    return await this.client.post( this.baseurl+ '/login',data,this.httpOptions).toPromise(), (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status == 401) {
          this.errorMessage=err.message;
          console.log(this.errorMessage);
          
          return;
        }
      }
      this.router.navigate(['login']);
      
    };

  }

}
