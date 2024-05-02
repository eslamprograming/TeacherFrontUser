import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Cheapter',
  templateUrl: './Cheapter.component.html',
  styleUrls: ['./Cheapter.component.css']
})
export class CheapterComponent implements OnInit {
Questions(arg0: any) {
  localStorage.setItem("subjectIdQuestion",arg0);
  this.router.navigate(['/QuestionCheapter']);
}
Videos(arg0: any) {
  localStorage.setItem("subjectIdVideo",arg0);
  this.router.navigate(['/Videos']);
}

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.getCheapter()
  }
  response:any;
  getCheapter()
  {
    var subId=localStorage.getItem("subjectSTID");
    // localStorage.removeItem("subjectSTID");
    this.http.get<any>(`${environment.apiUrl}api/Cheapter/GetAllCheapter?subjectId=${subId}`).subscribe(
      res=>{
        // alert("success");
        console.log(res);
        this.response=res;
      },
      error=>{
        alert("error");
      }
    )
  }

}
