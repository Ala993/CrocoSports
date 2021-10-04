import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
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
    console.log('Player added');
  }
}
