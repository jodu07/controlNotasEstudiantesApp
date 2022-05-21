import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Nota, Student } from '../../interface/student.interface';

@Component({
  selector: 'app-estudent-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {

  listStudents: Student[]=[];

  listNotas: Nota[]=[];

  constructor(private _estudenService: StudentService) { }
  
  listarEstudents(){
    this._estudenService.getPlayers()
    .subscribe(datos =>{
      console.log(datos);
      this.listStudents = <any>datos;
    })
  }

  notas(){
    this._estudenService.getNotas().subscribe(
      notas =>{
        console.log(notas);
        this.listNotas = <any>notas;
      }
    )
  }

  ngOnInit(): void {
    this.listarEstudents(),
    this.notas();
  }

}
