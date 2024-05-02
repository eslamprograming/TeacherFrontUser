import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseModelComponent } from './CourseModel.component';
import { FormsModule } from '@angular/forms';
import { AllCourseComponent } from './Components/AllCourse/AllCourse.component';
import { CourseDetailsComponent } from './Components/CourseDetails/CourseDetails.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,RouterModule
  ],
  declarations: [CourseModelComponent,AllCourseComponent,CourseDetailsComponent],
  exports:[AllCourseComponent,CourseDetailsComponent]
})
export class CourseModelModule { }
