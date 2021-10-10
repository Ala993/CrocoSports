import { Component, OnInit } from '@angular/core';
import { Match } from '../add-match/Match';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches : Match []=[];
  constructor() { }

  ngOnInit() {
    for (let i =0 ; i< localStorage.length; i++){
    let jsonObj: any = JSON.parse(localStorage.getItem(`${i}`));
    let s: Match = <Match>jsonObj;
    console.log('worker',s);
    this.matches.push(s);
    }
  }
}

