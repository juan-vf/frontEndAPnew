import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';
import { enviorement } from 'src/main';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  URL = enviorement + 'skill/';
  constructor(private http: HttpClient) { }

  public getSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.URL+'get')
  }

  public getSkillById(id: number): Observable<Skill>{
    return this.http.get<Skill>(this.URL + `getaSkill/${id}`);
  }

  public saveSkill(skill: Skill): Observable<any>{
    return this.http.post<any>(this.URL + 'save',skill);
  }
  public updateSkill(id: number, skill: Skill): Observable<any>{
    return this.http.put<any>(this.URL + `edit/${id}`, skill)
  }

  public deleteSkill(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`)
  }
}
