import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudentPageComponent } from './pages/estudent-page/estudiante-page.component';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';

import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { ContextMenuModule } from 'primeng/contextmenu';





@NgModule({
  declarations: [
    EstudentPageComponent
  ],
  imports: [
    CommonModule,  
    ButtonModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule
  ],

  exports: [
    EstudentPageComponent,
    ButtonModule
  ]
})
export class EstudentModule { }
