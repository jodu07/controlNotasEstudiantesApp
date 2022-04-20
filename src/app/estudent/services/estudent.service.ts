import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudent } from '../interface/esudent.interface';

@Injectable({
  providedIn: 'root'
})
export class EstudentService {

  private api='http://localhost:3000';

  constructor(private http: HttpClient) { }

  //get jugadores
  getPlayers():Observable<Estudent>{
    const url = `${this.api}/api/estudents`;  
    return this.http.get<Estudent>(url);
  }


}
