import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/Auth/Services/Auth.service';
import { ApplicationUser } from 'src/app/modelVM/ApplicationUser';
import { AuthModel } from 'src/app/modelVM/AuthModel';
import { DataResponce } from 'src/app/modelVM/DataResponce';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  userData:ApplicationUser = {} as ApplicationUser;
  result:AuthModel={}as AuthModel;
  Group:DataResponce={}as DataResponce;

  constructor(private dataService: AuthService,private router:Router,private http:HttpClient) { }

  submitForm() {
    
    this.dataService.postData(this.userData).subscribe(
      response => {
        console.log(response); 
        this.result=response;
        if(this.result.isAuthenticated===true){
          localStorage.setItem("token",this.result.token);
          this.router.navigate(['/profile']);
        }
        else{
          // alert("faild : "+this.result.message);
        }
        console.log(response);        
        // Handle the response here
      },
      error => {
        alert("error");
        // Handle errors here
      }
    );
  }
  ngOnInit() {
    
  }
  // getAllGroups(){
  //   this.http.get<any>(`${environment.apiUrl}api/Subject/AllSubject`).subscribe(
  //     response=>{
  //       this.Group=response;
  //       if(this.Group.success===false){
  //         alert(this.Group.message);
  //       }
  //       console.log(response);
  //     },
  //     error=>{
  //       alert(error.message);
  //     }
      
  //   )
  // }

}
