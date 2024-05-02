import { Injectable, NgZoneOptions, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
constructor(private http: HttpClient) {
  if(localStorage.getItem("token")===null)
    {
      this.isLoggedInVar=false;
    }
    else{
      this.isLoggedInVar=true;
    }
 }
  

private isLoggedInVar:any;

private apiUrl = `${environment.apiUrl}`;
isLoggedIn(): boolean {
    return this.isLoggedInVar;
  }

postData(data: any): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  return this.http.post<any>(`${this.apiUrl}api/Auth/Register`, data, httpOptions);
}
GetProfileData():Observable<any>{
  return this.http.get<any>(`${this.apiUrl}api/Auth/PersonInfo`);
}
login(data:any):Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  this.isLoggedInVar = true;
  return this.http.post<any>(`${this.apiUrl}api/Auth/Login`, data, httpOptions);
  
}
update(data:any):Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.patch<any>(`${this.apiUrl}api/Auth/Update`,data,httpOptions);
}
updatePassword(data:any):Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

  };
  return this.http.patch<any>(`${this.apiUrl}api/Auth/ChangePassword`,data,httpOptions);
}
logout(): void {
    // Here, you would typically perform tasks like clearing tokens or session data
    localStorage.removeItem("token");
    this.isLoggedInVar = false;
  }

}
