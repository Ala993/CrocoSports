import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  {path :'signup', component : SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }