import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudiantePageComponent } from './pages/estudiante-page/estudiante-page.component';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    EstudiantePageComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    EstudiantePageComponent,
    ButtonModule
  ]
})
export class EstudianteModule { }
