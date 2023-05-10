import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../model/person.model';
import { enviorement } from 'src/main';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  URL = enviorement + 'persons/';
  constructor(private http: HttpClient) { 

  }
  public getPerson(): Observable<Person>{
    //EL UNO(1) DE findperson/1, ES PARA TRAER LA PERSONA CON ID 1, CAMBIAR Y HACERLO DINAMICO
    return this.http.get<Person>(this.URL+'findperson/'+1)
  }
}
