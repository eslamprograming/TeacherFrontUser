import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-MyCourse',
  templateUrl: './MyCourse.component.html',
  styleUrls: ['./MyCourse.component.css']
})
export class MyCourseComponent implements OnInit {
AllTestInSubject(arg0: any) {
  localStorage.setItem("subjectTestId",arg0);
  this.router.navigate(['/Test']);
}
AllCheapterInSubject(arg0: any) {
  localStorage.setItem("subjectSTID",arg0);
  this.router.navigate(['/Cheapter']);
}

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
      this.http.get<any>(`${environment.apiUrl}api/StudentSubject/GetStudentSubject`).subscribe(
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
