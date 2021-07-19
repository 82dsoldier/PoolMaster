import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Player } from '../common/classes/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(
    private _http: HttpClient
  ) { }

  public addPlayer = (val: Player): Observable<object> => this._http.post(`${environment.apiUrl}/player`, val);

  public getPlayers = (): Observable<Player[]> => this._http.get<Player[]>(`${environment.apiUrl}/player`);

  public editPlayer = (val: Player): Observable<object> => this._http.put(`${environment.apiUrl}/player`, val);
}
