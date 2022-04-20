import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { StudentTableComponent } from './components/student-table/student-table.component';


@NgModule({
  declarations: [
    StudentPageComponent,
    StudentTableComponent
  ],
  imports: [
    CommonModule  
  ],
  exports: [
    StudentPageComponent
  ]
})
export class StudentModule { }
