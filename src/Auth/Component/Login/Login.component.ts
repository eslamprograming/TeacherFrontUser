import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Auth/Services/Auth.service';
import { AuthModel } from 'src/app/modelVM/AuthModel';
import { LoginVM } from 'src/app/modelVM/LoginVM';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  loginData:LoginVM={} as LoginVM;
  result:AuthModel={} as AuthModel;

  constructor(private service:AuthService,private router:Router) { }

  ngOnInit() {
  }
  login(){
    this.service.login(this.loginData).subscribe(
      response=>{
        this.result=response;
        if(this.result.isAuthenticated===true){
          localStorage.setItem("token",this.result.token);
          this.router.navigate(['/profile']);
        }
        else{
          alert(this.result.message);
        }
        
      },
      error=>{
        console.log(error);
        alert("faild");

      }
      
      )
  }

}
