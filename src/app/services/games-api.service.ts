import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesApiService {


  port = 3131;
  baseUrl = `http://localhost:${this.port}/games`;
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  getAllGames() {
    return this.http.get(this.baseUrl, this.httpOptions);
  }

  getGame(idGame:string) {
    return this.http.get(`${this.baseUrl}/${idGame}`, this.httpOptions);
  }

}
