import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Auth/Services/Auth.service';

@Component({
  selector: 'app-Logout',
  templateUrl: './Logout.component.html',
  styleUrls: ['./Logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service:AuthService,private router:Router) { }

  ngOnInit() {
    this.logout();
  }
  logout(){
    this.service.logout();
    this.router.navigate(['/Login']);
  }

}
