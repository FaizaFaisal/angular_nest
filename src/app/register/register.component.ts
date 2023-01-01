import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'angular-nest-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

    token="";

  name="";
  email="";
  password="";
  
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  
  
  constructor( private serv: RegisterService, private router: Router ) { }

  onRegister(){
    //.log(this.name,this.email,this.password);
    const re = this.serv.register({
       
      // During registration
      name:this.name,
      email:this.email,
      password:this.password
  
  }).then(re1 => {
  
    console.log();
    console.log(re1.user,re1.token);
    this.token = re1.token;
    localStorage.setItem('token',this.token);
    this.router.navigate(['/products']);
    this.isSuccessful = true;
        this.isSignUpFailed = false;
    // navigate to products home page 
  }).catch(err =>{
    console.log(err);
    this.errorMessage = err.error.message;
    this.isSignUpFailed = true;
  });
   
    
  }
}
