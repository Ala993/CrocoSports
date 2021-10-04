import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  match : any = {};
  addMatchForm : FormGroup;

  constructor(private formBuiler: FormBuilder) { }

  ngOnInit() {
    this.addMatchForm= this.formBuiler.group({
      scoreOne  :[''],
      scoreTwo :[''],
      teamOne : [''],
      teamTwo :['']
      
    });  
  }
  addmatch () {
  console.log('Here my Object', this.match)    
  }
}
