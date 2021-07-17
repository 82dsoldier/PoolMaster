import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './configuration/components/teams/teams.component';
import { AddTeamComponent } from './configuration/components/teams/components/add-team/add-team.component';

const routes: Routes = [
  {
    path: 'teams',
    component: TeamsComponent
  },
  {
    path: 'AddTeam',
    component: AddTeamComponent
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
