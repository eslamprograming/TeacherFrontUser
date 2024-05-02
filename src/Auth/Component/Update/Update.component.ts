import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Auth/Services/Auth.service';
import { AuthModel } from 'src/app/modelVM/AuthModel';
import { UpdateVM } from 'src/app/modelVM/UpdateVM';

@Component({
  selector: 'app-Update',
  templateUrl: './Update.component.html',
  styleUrls: ['./Update.component.css']
})
export class UpdateComponent implements OnInit {

  data:UpdateVM={} as UpdateVM;
  result:AuthModel={} as AuthModel;

  constructor(private service:AuthService,private router:Router) { }

  ngOnInit() {
  }
  Update(){
    this.service.update(this.data).subscribe(
      respons=>{
        this.result=respons;
        if(this.result.isAuthenticated===true){
          this.router.navigate(['/profile']);
        }
        else{
          alert(this.result.message);
        }
        
      },
      error=>{
        console.log(error)
      }
      
    )
  }

}
