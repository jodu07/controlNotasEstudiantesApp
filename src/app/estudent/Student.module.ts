import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPageComponent } from './pages/student-page/student-page.component';


@NgModule({
  declarations: [
    StudentPageComponent
  ],
  imports: [
    CommonModule  
  ],
  exports: [
    StudentPageComponent
  ]
})
export class StudentModule { }
