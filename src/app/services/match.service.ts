import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  SERVER_URL: string = "http://localhost:8500/api/clients";
  constructor(private httpClient: HttpClient) { }

  public getMatchById(matchId) {
    return this.httpClient.get(`${this.SERVER_URL}/${matchId}`);
  }
  public getAllMatches() {
    return this.httpClient.get(this.SERVER_URL);
  }
  public addMatch(match) {
    return this.httpClient.post(`${this.SERVER_URL}`, match)
  }
  public deleteMatch(matchId) {
    return this.httpClient.delete(`${this.SERVER_URL}/${matchId}`)
  } 
  public updateMatch(match) {
    return this.httpClient.put(`${this.SERVER_URL}/${match.id}`, match)
  }

}
