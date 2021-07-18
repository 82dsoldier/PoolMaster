import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/common/classes/team';
import { TeamService } from 'src/app/services/team.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'pm-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teams: Team[] = [];
  
  constructor(
    private _teamService: TeamService
  ) { }

  ngOnInit(): void {
    this._teamService.getTeams().pipe(take(1)).subscribe(val => 
      this.teams = val.sort((a,b) => a.name.localeCompare(b.name)));
  }

}
