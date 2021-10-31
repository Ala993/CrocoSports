import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayresComponent } from './components/playres/playres.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path :'login', component : LoginComponent} ,
  {path : 'signup', component : SignupComponent},
  {path : 'matches' , component : MatchesComponent},
  {path :'players', component:PlayresComponent},
  {path :'signup', component : SignupComponent},
  {path : 'addmatch', component : AddMatchComponent},
  {path : 'addmatch/:id', component : AddMatchComponent},
  {path : 'addteam', component : AddTeamComponent},
  {path : 'addplayer', component : AddPlayerComponent},
  {path : 'admin', component : AdminComponent},
  {path : 'displayMatch/:id' , component : DisplayMatchComponent},
  {path : 'displayPlayer/:id' , component : DisplayPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
