import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-formPayment',
  templateUrl: './formPayment.component.html',
  styleUrls: ['./formPayment.component.css']
})
export class FormPaymentComponent implements OnInit {
ConfirmEnroll() {
  const subjectId=localStorage.getItem("CourseId");
  this.http.post<any>(`${environment.apiUrl}api/StudentSubject/AddStudentToSubject?SubjectId=${subjectId}`,null).subscribe(
    res=>{
      alert("success");
      this.router.navigate(['/Course']);
    },
    error=>{
      alert("error");
      console.log(error);
    }
  )
}

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }


}
