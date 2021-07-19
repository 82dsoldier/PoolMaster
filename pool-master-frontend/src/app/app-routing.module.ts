import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './configuration/components/teams/teams.component';
import { AddTeamComponent } from './configuration/components/teams/components/add-team/add-team.component';
import { AddPlayerComponent } from './configuration/components/players/components/add-player/add-player.component';
import { PlayersComponent } from './configuration/components/players/players.component';

const routes: Routes = [
  {
    path: 'teams',
    component: TeamsComponent
  },
  {
    path: 'AddTeam',
    component: AddTeamComponent
  },
  {
    path: 'players',
    component: PlayersComponent
  },
  {
    path: 'AddPlayer',
    component: AddPlayerComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
