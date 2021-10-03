import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playres',
  templateUrl: './playres.component.html',
  styleUrls: ['./playres.component.css']
})
export class PlayresComponent implements OnInit {
  players : any =[];

  constructor() { }

  ngOnInit() {
    this.players = [
      {img :'assets/images/img_1.jpg', date : 'May 20, 2020',describe:'Romolu to stay at Real Nadrid?' },
      {img :'assets/images/img_2.jpg', date : 'Juin 05, 2020',describe:'Romolu to stay at Real Nadrid?' },
      {img :'assets/images/img_3.jpg', date : 'Janv 18, 2020',describe:'Romolu to stay at Real Nadrid?' },
      {img :'assets/images/img_3.jpg', date : 'Mars 12, 2020',describe:'Romolu to stay at Real Nadrid?' },
      
      
    ]
  }
  
}


