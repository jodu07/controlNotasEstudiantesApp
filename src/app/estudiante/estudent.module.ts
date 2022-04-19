import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudentPageComponent } from './pages/estudent-page/estudiante-page.component';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    EstudentPageComponent
  ],
  imports: [
    CommonModule,  
    ButtonModule,
    TableModule,  
    HttpClientModule,
    FormsModule    
  ],
  exports: [
    EstudentPageComponent    
  ]
})
export class EstudentModule { }
