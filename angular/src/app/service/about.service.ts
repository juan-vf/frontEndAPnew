import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../model/about';
import { enviorement } from 'src/main';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  
  
  URL = enviorement + 'about/'
  constructor(private http: HttpClient) { }

  public getAbout(): Observable<About[]>{
    return this.http.get<About[]>(this.URL+'getList')
  }

  public getAbtById(id: number): Observable<About>{
    return this.http.get<About>(this.URL + `getabout/${id}`);
  }

  public saveAbt(abt: About): Observable<any>{
    return this.http.post<any>(this.URL + 'save',abt);
  }
  public updateAbt(id: number, abt: About): Observable<any>{
    return this.http.put<any>(this.URL + `edit/${id}`, abt)
  }

  public deleteAbt(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`)
  }
}
