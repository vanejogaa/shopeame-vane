import { AuthService } from './../../servicios/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  email: string = ""
  pwd: string = ""
  firstname: string = ""
  lastname: string = ""
  age: number = 18

  constructor(private AuthService: AuthService){}

  register(){
    this.AuthService.register(
      this.email,
      this.pwd,
      this.firstname,
      this.lastname,
      this.age
    ).subscribe(data=>{
      alert('login correcto')
    },
    error=>{
      alert('login incorrecto')
    })
    
  }
}