import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';
import { Option } from 'src/app/common/classes/option';
import { ObjectID } from 'bson';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Player } from 'src/app/common/classes/player';

@Component({
  selector: 'pm-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {
  playerFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    number: new FormControl('', [Validators.required, Validators.pattern('\d*')]),
    skillLevel: new FormControl(1, Validators.required)
  });

  operation: string;

  get disabled(): boolean {
    return !(this.playerFormGroup.touched && this.playerFormGroup.invalid);
  }

  skillLevels: Option[] = [
    {id: 1, name: '1'},
    {id: 2, name: '2'},
    {id: 3, name: '3'},
    {id: 4, name: '4'},
    {id: 5, name: '5'},
    {id: 6, name: '6'},
    {id: 7, name: '7'},
    {id: 8, name: '8'},
    {id: 9, name: '9'}
  ];

  constructor(
    public dialogRef: MatDialogRef<AddPlayerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Player
  ) { }

  ngOnInit(): void {
    this.operation = this.data ? "Add" : "Edit";
    if(this.data) {
      this.playerFormGroup.get('name').setValue(this.data.name);
      this.playerFormGroup.get('number').setValue(this.data.number);
      this.playerFormGroup.get('skillLevel').setValue(this.data.skillLevel);
    }
  }

  onSave() {
    let val = {
      id: this.data ? this.data.id : '',
      name: this.playerFormGroup.get('name').value,
      number: this.playerFormGroup.get('number').value,
      skillLevel: this.playerFormGroup.get('skillLevel').value
    };
    this.dialogRef.close(val);
  }
}
