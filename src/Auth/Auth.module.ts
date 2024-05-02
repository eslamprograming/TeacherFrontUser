import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './Auth.component';
import { RegisterComponent } from './Component/Register/Register.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './Component/profile/profile.component';
import { LoginComponent } from './Component/Login/Login.component';
import { UpdateComponent } from './Component/Update/Update.component';
import { UpdatePasswordComponent } from './Component/UpdatePassword/UpdatePassword.component';
import { LogoutComponent } from './Component/Logout/Logout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,RouterModule
  ],
  declarations: [RegisterComponent,ProfileComponent,LoginComponent,UpdateComponent,UpdatePasswordComponent
  ,LogoutComponent
  ],
  exports:[RegisterComponent,ProfileComponent,LoginComponent,UpdateComponent,UpdatePasswordComponent
  ,LogoutComponent
  ]
})
export class AuthModule { }
