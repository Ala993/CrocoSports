import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { Match } from './Match';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  id: any;
  match: any = {};
  title = "Add";
  addMatchForm: FormGroup;

  constructor(private formBuiler: FormBuilder, private matchService: MatchService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id == 0) {
      this.addMatchForm = this.formBuiler.group({

        scoreOne: [''],
        scoreTwo: [''],
        teamOne: [''],
        teamTwo: ['']

      });
    
    } else {
      this.matchService.getMatchById(this.id).subscribe(
        (data) => {
          console.log('Match found' , data);
          this.match= data;
        }
      );
      this.title= "Edit";   
    }

  }
  addmatch() {
    if(this.id) {
      this.matchService.updateMatch(this.id).subscribe(
        () => {console.log('match updated');}
      )
    }
    else {
    this.matchService.addMatch(this.match).subscribe(
      () => {
        console.log('Match added');
      }
    );
  }
    this.router.navigate(['admin']);

  }
}
