import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-CourseDetails',
  templateUrl: './CourseDetails.component.html',
  styleUrls: ['./CourseDetails.component.css']
})
export class CourseDetailsComponent implements OnInit {
AddStudent(arg0: any) {
  localStorage.setItem("StudentSubjectId",arg0);
  this.router.navigate(['/Payment']);
}

  constructor(private http:HttpClient,private router:Router) { }

  model:any;
  response:any;
  ngOnInit() {
    this.CourseDetails();
  }
  CourseDetails(){
    this.model=localStorage.getItem("CourseId");
    this.http.get<any>(`${environment.apiUrl}api/Subject/Subject?Id=${this.model}`).subscribe(
      res=>{
        console.log(res);
        this.response=res;
      },
      error=>{
        alert("error");
      }
    )
  }

}
