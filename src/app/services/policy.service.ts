import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getPolicies(){ 
       return this.httpClient.get(this.SERVER_URL + 'policies');
  }

  public getPolicy(matchId){
       return this.httpClient.get(`${this.SERVER_URL + 'policies'}/${matchId}`); 
  }
  public createPolicy(match: {id: number, teamOne: string, teamTwo: string, scoreOne: number, scoreTwo: number}){
      return this.httpClient.post(`${this.SERVER_URL + 'policies'}`, match)
  }

  public deletePolicy(matchId){
      return this.httpClient.delete(`${this.SERVER_URL + 'policies'}/${matchId}`)
  }
  public updatePolicy(policy: {id: number, amount: number, clientId: number, userId: number, description: string}){
      return this.httpClient.put(`${this.SERVER_URL + 'policies'}/${policy.id}`, policy)
  }

}