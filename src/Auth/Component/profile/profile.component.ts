import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/Auth/Services/Auth.service';
import { AuthModel } from 'src/app/modelVM/AuthModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  result:any;
  constructor(private service:AuthService) { }

  ngOnInit() {
    this.profile();
  }
  profile(){
    this.service.GetProfileData().subscribe(
      response=>{
        console.log(response.message);
        this.result=response;
      },
      error=>{
        alert(error.message);
      }
    )
  }

}
