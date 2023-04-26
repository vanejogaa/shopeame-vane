import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any = null

  constructor(private authService: AuthService,
    private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe(event=>{
      if(event.constructor.name === "NavigationEnd"){
        this.user = this.authService.getUser()
      }
    })
  
  }


 
}

