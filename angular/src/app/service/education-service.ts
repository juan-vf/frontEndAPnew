import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';
import { enviorement } from 'src/main';

@Injectable({
  providedIn: 'root'
})
export class EducationService{

  URL = enviorement + 'education/';
  constructor(private http: HttpClient) {}

  public getEdu(): Observable<Education[]>{
    return this.http.get<Education[]>(this.URL+'get')
  }


  public getEduById(id: number): Observable<Education>{
    return this.http.get<Education>(this.URL + `getEducation/${id}`);
  }

  public saveEdu(edu: Education): Observable<any>{
    return this.http.post<any>(this.URL + 'save',edu);
  }
  public updateEdu(id: number, edu: Education): Observable<any>{
    return this.http.put<any>(this.URL + `edit/${id}`, edu)
  }

  public deleteEdu(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`)
  }
  // public deleteEdu(id: number): Observable<void>{
  //   return this.http.delete<void>(this.URL + `delete/${id}`);
  // }
}
