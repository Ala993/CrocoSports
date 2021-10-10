import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  matches =  [
    {id : 1, teamOne :'FCB', teamTwo : 'RMD' , scoreOne : 2, scoreTwo :0},
    {id : 2, teamOne :'CA', teamTwo : 'EST' , scoreOne : 0, scoreTwo :3},
    {id : 3, teamOne :'CAB', teamTwo : 'ASM' , scoreOne : 1, scoreTwo :1},
    {id : 4, teamOne :'CAB', teamTwo : 'ASM' , scoreOne : 1, scoreTwo :1},
      
  ];

   return {matches};

  }
}