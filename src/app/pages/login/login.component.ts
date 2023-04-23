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
  error = ""

  constructor(private authService: AuthService, private router: Router){}
  
  login(){
    this.authService.login(this.email,this.pwd).subscribe(data=>{
      console.log(data)
      this.error = ""
      this.authService.setUser(data.user)
      this.router.navigateByUrl("/profile")
      alert('login correcto')
  
    },
    error=>{
      alert('login incorrecto')
  
    })
  }
}
