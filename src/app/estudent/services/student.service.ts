import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student, Nota } from '../interface/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private api='http://localhost:3000';

  constructor(private http: HttpClient) { }

  //get jugadores
  getPlayers():Observable<Student>{
    const url = `${this.api}/api/students`;  
    return this.http.get<Student>(url);
  }

  getNotas():Observable<Nota>{
    const url = `${this.api}/api/notas`;  
    return this.http.get<Nota>(url);
  }




}
