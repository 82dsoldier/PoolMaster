import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ObjectID } from 'bson';
import { take } from 'rxjs/operators';
import { Player } from 'src/app/common/classes/player';
import { PlayerService } from 'src/app/services/player.service';
import { AddPlayerComponent } from './components/add-player/add-player.component';

@Component({
  selector: 'pm-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players: Player[] = [];
  displayedColumns: string[] = ['name', 'number', 'skillLevel'];

  constructor(
    private _playerService: PlayerService,
    private _matDialog: MatDialog,
    private _snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData(): void {
    this._playerService.getPlayers().pipe(take(1)).subscribe(val => {
      this.players = val;
    });
  }

  onEditPlayer(row: Player): void {
    const dialogRef = this._matDialog.open(AddPlayerComponent, {data: row});
    dialogRef.afterClosed().subscribe(val => {
      if(val) {
        this._playerService.editPlayer(val).subscribe(val => {
          //Add error handling here
          this._snackbar.open('Player edited successfully');
          this.refreshData();
        })
      }
    });
  }

  onAddPlayer(): void {
    const dialogRef = this._matDialog.open(AddPlayerComponent);
    dialogRef.afterClosed().subscribe(val => {
      if(val) {
        this._playerService.addPlayer(val).subscribe(val => {
          //Add error handling here
          this._snackbar.open('Player added successfully');
          this.refreshData();
        });
      }
    });
  }
}
