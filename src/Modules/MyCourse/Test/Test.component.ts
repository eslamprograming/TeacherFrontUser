import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Test',
  templateUrl: './Test.component.html',
  styleUrls: ['./Test.component.css']
})
export class TestComponent implements OnInit {

  QuestionTest(testId:any) {
    localStorage.setItem("QuestionTestId",testId);
    this.router.navigate(['/QuestionTest']);
  }
  
    constructor(private http:HttpClient,private router:Router) { }
    Courses:any;
    ngOnInit() {
      this.getAllCourse();
    }
    getAllCourse(){
      let subId=localStorage.getItem("subjectTestId")
      this.http.get<any>(`${environment.apiUrl}api/Test/GetAllTestInSubject?SubjectId=${subId}`).subscribe(
        response=>{
          // alert("success");
          this.Courses=response.values;
          console.log(this.Courses);
        },
        error=>{
          alert(error.message);
        }
      )
    }
  

}
