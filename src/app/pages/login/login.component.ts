import { Router } from '@angular/router';
import { AuthService } from './../../servicios/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = ""
  pwd: string = ""

  constructor(private AuthService: AuthService, private router: Router){}
  
  login(){
    this.AuthService.login(this.email,this.pwd).subscribe(data=>{
      console.log(data)
      this.router.navigateByUrl("/")
      alert('login correcto')
  
    },
    error=>{
      alert('login incorrecto')
  
    })
  }
}
