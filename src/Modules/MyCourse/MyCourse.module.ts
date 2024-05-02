import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCourseComponent } from './MyCourse.component';
import { SharedModelModule } from 'src/SharedModel/SharedModel.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CheapterComponent } from './Cheapter/Cheapter.component';
import { TestComponent } from './Test/Test.component';
import { VideosComponent } from './Videos/Videos.component';
import { QuestionCheapterComponent } from './QuestionCheapter/QuestionCheapter.component';
import { QuestionTestComponent } from './QuestionTest/QuestionTest.component';
import { DegreeComponent } from './Degree/Degree.component';
import { BlogComponent } from './Blog/Blog.component';

@NgModule({
  imports: [
    CommonModule,SharedModelModule,FormsModule,HttpClientModule
  ],
  declarations: [MyCourseComponent,DegreeComponent,MyCourseComponent,CheapterComponent,TestComponent,VideosComponent,QuestionCheapterComponent,QuestionTestComponent,BlogComponent],
  exports:[MyCourseComponent,DegreeComponent,CheapterComponent,TestComponent,VideosComponent,QuestionCheapterComponent,QuestionTestComponent,BlogComponent]
})
export class MyCourseModule { }
