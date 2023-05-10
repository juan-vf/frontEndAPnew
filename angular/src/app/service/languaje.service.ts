import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Languaje } from '../model/languaje';
import { enviorement } from 'src/main';

@Injectable({
  providedIn: 'root'
})
export class LanguajeService {
  URL = enviorement + 'languaje/';
  constructor(private http: HttpClient) { }

  public getLanguaje(): Observable<Languaje[]>{
    return this.http.get<Languaje[]>(this.URL+'get')
  }

  public getLangById(id: number): Observable<Languaje>{
    return this.http.get<Languaje>(this.URL + `getaLanguaje/${id}`);
  }

  public saveLang(lang: Languaje): Observable<any>{
    return this.http.post<any>(this.URL + 'save',lang);
  }
  public updateLang(id: number, lang: Languaje): Observable<any>{
    return this.http.put<any>(this.URL + `edit/${id}`, lang)
  }

  public deleteLang(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`)
  }
}

