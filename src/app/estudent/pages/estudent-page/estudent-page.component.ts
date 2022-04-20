import { Component, OnInit } from '@angular/core';
import { EstudentService } from '../../services/estudent.service';
import { Estudent } from '../../interface/esudent.interface';

@Component({
  selector: 'app-estudent-page',
  templateUrl: './estudent-page.component.html',
  styleUrls: ['./estudent-page.component.css']
})
export class EstudentPageComponent implements OnInit {

  listEstudents: Estudent[]=[]

  constructor(private _estudenService: EstudentService) { }
  
  listarEstudents(){
    this._estudenService.getPlayers()
    .subscribe(datos =>{
      console.log(datos);
      this.listEstudents = <any>datos;
    })
  }


  ngOnInit(): void {
    this.listarEstudents()
  }

}
