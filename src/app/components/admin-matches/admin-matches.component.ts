import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
@Component({
  selector: 'app-admin-matches',
  templateUrl: './admin-matches.component.html',
  styleUrls: ['./admin-matches.component.css']
})

export class AdminMatchesComponent implements OnInit {
  matches: any;
  constructor(private router: Router, private matchService: MatchService) { }

  ngOnInit() {
    /* this.matches = JSON.parse(localStorage.getItem('matches'));
    this.matchService.getAllMatches().subscribe
     */
    this.matchService.getAllMatches().subscribe(
      (data) => {
        console.log("Data from BE", data);
        this.matches = data;
      }
    )
  }
  goToDisplay(id) {
    this.router.navigate([`displayMatch/${id}`]);
  }
  deleteMatch(id) {
    this.matchService.deleteMatch(id).subscribe(
      () => {
        console.log("Match deleted");
      this.matchService.getAllMatches().subscribe(
        (data)=>{
          this.matches= data;
        }
      )
      }
    )
  }

}
