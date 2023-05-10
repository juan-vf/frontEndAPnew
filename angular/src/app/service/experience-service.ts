import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';
import { enviorement } from 'src/main';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  URL = enviorement + 'experience/';
  constructor(private http: HttpClient) { }

  public getExperiences(): Observable<Experience[]>{
    return this.http.get<Experience[]>(this.URL+'getList')
  }


  public getExpById(id: number): Observable<Experience>{
    return this.http.get<Experience>(this.URL + `getaExperience/${id}`);
  }

  public saveExp(exp: Experience): Observable<any>{
    return this.http.post<any>(this.URL + 'save',exp);
  }
  public updateExp(id: number, exp: Experience): Observable<any>{
    return this.http.put<any>(this.URL + `edit/${id}`, exp)
  }

  public deleteExp(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`)
  }
}
