import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { WorldCupComponent } from './components/world-cup/world-cup.component';
import { ResultsComponent } from './components/results/results.component';
import { NewsComponent } from './components/news/news.component';
import { ClassificationsComponent } from './components/classifications/classifications.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlugComponent } from './components/blug/blug.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayresComponent } from './components/playres/playres.component';
import { PlayerComponent } from './components/player/player.component';
import { BannerComponent } from './components/banner/banner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminPlayerComponent } from './components/admin-player/admin-player.component';
import { AdminTeamsComponent } from './components/admin-teams/admin-teams.component';
import { AdminMatchesComponent } from './components/admin-matches/admin-matches.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WorldCupComponent,
    ResultsComponent,
    NewsComponent,
    ClassificationsComponent,
    VideosComponent,
    BlugComponent,
    MatchesComponent,
    PlayresComponent,
    PlayerComponent,
    BannerComponent,
    AddMatchComponent,
    AddTeamComponent,
    AddPlayerComponent,
    AdminComponent,
    AdminPlayerComponent,
    AdminTeamsComponent,
    AdminMatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
