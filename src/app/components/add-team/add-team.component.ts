import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  team : any ={};
  addTeamForm : FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.addTeamForm= this.formBuilder.group({
      name  :[''],
      foundation :[''],
      owner : [''],
      
    });
  }
  addTeam() {
    console.log('Team added')
  }
}
