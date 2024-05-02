import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Videos',
  templateUrl: './Videos.component.html',
  styleUrls: ['./Videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.AllVideoInCheapter();
  }
  response:any;
  AllVideoInCheapter(){
    let subId=localStorage.getItem("subjectIdVideo");
    this.http.get<any>(`${environment.apiUrl}api/Video/GetAllVideosInCheapter?CheapterId=${subId}`).
    subscribe(
      res=>{
        this.response=res;
        console.log(res);
      },
      error=>{
        console.log(error);
        alert("error");
      }
    )
  }

}
