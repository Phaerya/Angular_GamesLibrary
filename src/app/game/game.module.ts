import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGameComponent } from './list-game/list-game.component';
import { DetailGameComponent } from './detail-game/detail-game.component';
import { BorderCardDirective } from './border-card.directive';
import { GameGenrePipe } from './game-genre.pipe';


const gameRoutes: Routes = [
  {  path : 'game/:id', component: DetailGameComponent  },
  {  path : 'games', component: ListGameComponent  },        
]
  

@NgModule({
  declarations: [
    ListGameComponent,
    DetailGameComponent,
    BorderCardDirective,
    GameGenrePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(gameRoutes)
  ]
})
export class GameModule { }