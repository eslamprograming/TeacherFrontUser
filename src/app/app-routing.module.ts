import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from 'src/Auth/Component/Register/Register.component';
import { HomeComponent } from 'src/SharedModel/Componentes/Home/Home.component';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from 'src/Auth/Component/profile/profile.component';
import { LoginComponent } from 'src/Auth/Component/Login/Login.component';
import { UpdateComponent } from 'src/Auth/Component/Update/Update.component';
import { UpdatePasswordComponent } from 'src/Auth/Component/UpdatePassword/UpdatePassword.component';
import { AuthGuard } from './Gaurds/auth.guard';
import { LogoutComponent } from 'src/Auth/Component/Logout/Logout.component';
import { AllCourseComponent } from 'src/CourseModel/Components/AllCourse/AllCourse.component';
import { CourseDetailsComponent } from 'src/CourseModel/Components/CourseDetails/CourseDetails.component';
import { FormPaymentComponent } from 'src/Modules/Payment/formPayment/formPayment.component';
import { MyCourseComponent } from 'src/Modules/MyCourse/MyCourse/MyCourse.component';
import { CheapterComponent } from 'src/Modules/MyCourse/Cheapter/Cheapter.component';
import { TestComponent } from 'src/Modules/MyCourse/Test/Test.component';
import { VideosComponent } from 'src/Modules/MyCourse/Videos/Videos.component';
import { QuestionCheapterComponent } from 'src/Modules/MyCourse/QuestionCheapter/QuestionCheapter.component';
import { QuestionTestComponent } from 'src/Modules/MyCourse/QuestionTest/QuestionTest.component';
import { DegreeComponent } from 'src/Modules/MyCourse/Degree/Degree.component';
import { CountactUsComponent } from 'src/SharedModel/Componentes/CountactUs/CountactUs.component';
import { BlogComponent } from 'src/Modules/MyCourse/Blog/Blog.component';


const routes: Routes = [
  {path:'',component:LayoutComponent,children:[
  {path:'',component:HomeComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'CourseDetails',component:CourseDetailsComponent},
  {path:'Course',component:AllCourseComponent,canActivate:[AuthGuard]},
  {path:'MyCourse',component:MyCourseComponent,canActivate:[AuthGuard]},
  {path:'Cheapter',component:CheapterComponent,canActivate:[AuthGuard]},
  {path:'Test',component:TestComponent,canActivate:[AuthGuard]},
  {path:'Videos',component:VideosComponent,canActivate:[AuthGuard]},
  {path:'QuestionCheapter',component:QuestionCheapterComponent,canActivate:[AuthGuard]},
  {path:'QuestionTest',component:QuestionTestComponent,canActivate:[AuthGuard]},
  {path:'Degree',component:DegreeComponent,canActivate:[AuthGuard]},
  {path:'Countact',component:CountactUsComponent},
  {path:'Blog',component:BlogComponent},
  ],
},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:'Update',component:UpdateComponent,canActivate:[AuthGuard]},
  {path:'Updatepassword',component:UpdatePasswordComponent,canActivate:[AuthGuard]},
  {path:'Payment',component:FormPaymentComponent,canActivate:[AuthGuard]},
  {path:'Logout',component:LogoutComponent},
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
