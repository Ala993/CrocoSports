import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player : any = {};
  addPlayerForm : FormGroup;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.addPlayerForm = this.formBuilder.group({
      name:[''],
      age:[''],
      post:[''],
      nbr:['']
      
    })
  }
  addPlayer() {
    let playerID = JSON.parse(localStorage.getItem('playerID') || '0');
    let players = JSON.parse(localStorage.getItem('players') || '[]');
    this.player.id = playerID;
    players.push(this.player);
    console.log('object added', this.player);
    localStorage.setItem('players', JSON.stringify(players));
    localStorage.setItem('playerID', playerID+1);
  }
}
