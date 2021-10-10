import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { Match } from './Match';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  match: any = {};
  addMatchForm: FormGroup;

  constructor(private formBuiler: FormBuilder, private matchService: MatchService , private router : Router) { }

  ngOnInit() {
    this.addMatchForm = this.formBuiler.group({

      scoreOne: [''],
      scoreTwo: [''],
      teamOne: [''],
      teamTwo: ['']

    });

  }
  addmatch() {
    this.matchService.addMatch(this.match).subscribe(
      () => {
        console.log('Match added');
      }
    );
    this.router.navigate(['admin']);

  }
}
