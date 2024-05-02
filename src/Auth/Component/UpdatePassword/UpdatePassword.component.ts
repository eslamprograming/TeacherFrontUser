import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Auth/Services/Auth.service';
import { AuthModel } from 'src/app/modelVM/AuthModel';
import { PasswordVM } from 'src/app/modelVM/PasswordVM';

@Component({
  selector: 'app-UpdatePassword',
  templateUrl: './UpdatePassword.component.html',
  styleUrls: ['./UpdatePassword.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  constructor( private service:AuthService,private router:Router) { }

  ngOnInit() {
  }
  data:PasswordVM={} as PasswordVM;
  result:AuthModel={} as AuthModel;
  UpdatePassword(){
    this.service.updatePassword(this.data).subscribe(
      response=>{
        this.result=response;
        if(this.result.isAuthenticated===true){
          localStorage.removeItem("token");
          alert("password Updated");
          this.router.navigate(['/Login']);
        }
        else{
          alert(this.result.message);
        }
      },
      error=>{
        alert(error.message);
      }
    )
  }

}
