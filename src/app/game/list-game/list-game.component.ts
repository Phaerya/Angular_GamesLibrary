import { Component } from '@angular/core';
import { Game } from '../game';
import { GAMES } from '../mock-game-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-game',
  templateUrl: './list-game.component.html',
  styles: [
  ]
})

export class ListGameComponent {
  gameList: Game[] = GAMES;

  constructor(private router: Router) {}

  goToGame(game: Game){
    this.router.navigate(['/game/', game.id]);
  }
}
