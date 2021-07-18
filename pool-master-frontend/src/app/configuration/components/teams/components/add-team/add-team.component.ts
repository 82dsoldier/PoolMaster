import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Player } from 'src/app/common/classes/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'pm-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {
  teamFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    number: new FormControl('')
  });

  players: Player[] = [];
  
  get disabled(): boolean {
    return (this.teamFormGroup.touched && this.teamFormGroup.invalid);
  }

  constructor(
    private _playerService: PlayerService
  ) { }

  ngOnInit(): void {
    
  }

  onSave(): void {
    
  }

}
