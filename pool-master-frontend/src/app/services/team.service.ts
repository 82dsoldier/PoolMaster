import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from '../common/classes/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private _http: HttpClient
  ) { }

  public getTeams = (): Observable<Team[]> => this._http.get<Team[]>(`${environment.apiUrl}/team`);
  public addTeam = (val: Team): Observable<any> => this._http.post(`${environment.apiUrl}/team`, val);
}
