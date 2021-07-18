import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { TeamsComponent } from './configuration/components/teams/teams.component';
import { PlayersComponent } from './configuration/components/players/players.component';
import { ScoreConfigComponent } from './configuration/components/score-config/score-config.component';
import { AddTeamComponent } from './configuration/components/teams/components/add-team/add-team.component';
import { SelectWithSearchComponent } from './common/components/select-with-search/select-with-search.component';



@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    PlayersComponent,
    ScoreConfigComponent,
    AddTeamComponent,
    SelectWithSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    RouterModule,
    AppRoutingModule,
    MatSelectModule
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: { 
        duration: 8000,
        verticalPosition: 'top'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
