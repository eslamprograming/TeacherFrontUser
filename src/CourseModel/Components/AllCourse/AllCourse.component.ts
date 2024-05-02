import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-AllCourse',
  templateUrl: './AllCourse.component.html',
  styleUrls: ['./AllCourse.component.css']
})
export class AllCourseComponent implements OnInit {
CouresDetails(CourseId:any) {
  localStorage.setItem("CourseId",CourseId);
  this.router.navigate(['/CourseDetails'])
}

  constructor(private http:HttpClient,private router:Router) { }
  Courses:any;
  ngOnInit() {
    this.getAllCourse();
  }
  getAllCourse(){
    this.http.get<any>(`${environment.apiUrl}api/Subject/AllSubject`).subscribe(
      response=>{
        this.Courses=response.values;
        console.log(this.Courses);
      },
      error=>{
        alert(error.message);
      }
    )
  }

}
