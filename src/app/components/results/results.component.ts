import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() m: any;
  constructor() { }

  ngOnInit() {
  }
  winLoss(scoreOne, scoreTwo) {
    if (scoreOne > scoreTwo) {
      return ['(win)','green'];
    }
    else if (scoreOne < scoreTwo) { return ['(loss)','red'] }
    else { return ['(draw)','blue'] }
  }

}
