import { Injectable } from '@angular/core';
import { Estudent } from '../interface/estudiante.interface';

@Injectable({
  providedIn: 'root'
})
export class EstudentService {


  listEstudents: Estudent[]=[
    {
      id: 1,
      name: 'joselito',
      materia: 'matematicas',
      qualification: 5  
    },
    {
      id: 2,
      name: 'hassdan',
      materia: 'matematicas',
      qualification: 4  
    },
    {
      id: 1,
      name: 'andrea',
      materia: 'matematicas',
      qualification: 3  
    }

  ]

  constructor() { }

  getEstudents(){

    //slice para devolver una copia del arreglo
    return this.listEstudents;
  }
}
