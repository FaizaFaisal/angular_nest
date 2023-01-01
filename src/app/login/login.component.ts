import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'angular-nest-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent  {
  
  email="";
  password="";
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

 

  constructor( private serv: LoginService, private router: Router ) { }

  token="";

  onLogin(){
    const re = this.serv.login({
       
      // During login
      email:this.email,
      password:this.password
  
  }).then(re1 => {
  
    console.log();
    console.log(re1.user,re1.token);
     if(localStorage.getItem('token') != null){
        localStorage.removeItem('token');
        localStorage.clear();
     }
     else {
      this.token = re1.token;
      localStorage.setItem('token',this.token);
     
     }
    this.router.navigate(['/products']);
    this.isLoginFailed = false;
        this.isLoggedIn = true;
    // navigate to products home page 
  }).catch(err =>{
    console.log(err);
    this.errorMessage = err.error.message;
          this.isLoginFailed = true;
  });
   
    
  }

 
   
  
  }


  

