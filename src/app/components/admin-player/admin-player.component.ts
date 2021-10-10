import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-player',
  templateUrl: './admin-player.component.html',
  styleUrls: ['./admin-player.component.css']
})
export class AdminPlayerComponent implements OnInit {
  players : any ;
  constructor(private router : Router ) { }

  ngOnInit() {
  this.players = JSON.parse(localStorage.getItem('players'));
  }
  goToDisplay (id) {
    this.router.navigate([`displayPlayer/${id}`]);
  }


}
