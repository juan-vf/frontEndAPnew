import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project';
import { enviorement } from 'src/main';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  URL = enviorement + 'project/';
  constructor(private http: HttpClient) { }

  public getProject(): Observable<Project[]>{
    return this.http.get<Project[]>(this.URL+'get')
  }


  public getPrjById(id: number): Observable<Project>{
    return this.http.get<Project>(this.URL + `getProject/${id}`);
  }

  public savePrj(prj: Project): Observable<any>{
    return this.http.post<any>(this.URL + 'save',prj);
  }
  public updatePrj(id: number, prj: Project): Observable<any>{
    return this.http.put<any>(this.URL + `edit/${id}`, prj)
  }

  public deletePrj(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`)
  }
}
