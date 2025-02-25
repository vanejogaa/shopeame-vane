import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit{
  
  constructor(private authService: AuthService, private router: Router){
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.authService.logout()
      this.router.navigateByUrl("/")
    },2000)
  }
  
}
