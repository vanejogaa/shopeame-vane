import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any = {}
  constructor(private authService: AuthService){}
  ngOnInit(): void {
    
    this.user= this.authService.getUser()
  }
}
