import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Degree',
  templateUrl: './Degree.component.html',
  styleUrls: ['./Degree.component.css']
})
export class DegreeComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.studentDegree();
  }
  response:any;
  studentDegree(){
    this.http.get<any>(`${environment.apiUrl}api/Degree/GetStudentDegreesAsync`).subscribe(
      res=>{
        this.response=res;
        console.log(res);
      },
      error=>{
        alert("error");
        console.error(error);
      }      
    )
  }

}
