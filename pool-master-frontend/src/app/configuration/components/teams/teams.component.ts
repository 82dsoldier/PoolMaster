import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/common/classes/team';

@Component({
  selector: 'pm-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teams: Team[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
