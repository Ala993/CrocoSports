import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches : any =[];
  constructor() { }

  ngOnInit() {
  this.matches= [
    {id:1,teamOne:'FCB',teamTwo:'RMD',scoreOne:2,scoreTwo:1,img1:"assets/images/logo_1.png",img2:"assets/images/logo_2.png"},
    {id:2,teamOne:'CA',teamTwo:'EST',scoreOne:0,scoreTwo:2,img1:"assets/images/logo_1.png",img2:"assets/images/logo_2.png"},
    {id:3,teamOne:'ROM',teamTwo:'JUV',scoreOne:0,scoreTwo:0,img1:"assets/images/logo_1.png",img2:"assets/images/logo_2.png"},
    {id:4,teamOne:'LIV',teamTwo:'DOR',scoreOne:3,scoreTwo:2,img1:"assets/images/logo_1.png",img2:"assets/images/logo_2.png"}
    
  ]
  }

}
