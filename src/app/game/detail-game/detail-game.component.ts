import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GAMES } from '../mock-game-list';
import { Game } from '../game';


@Component({
  selector: 'app-detail-game',
  templateUrl: './detail-game.component.html',
  styles: [
  ]
})
export class DetailGameComponent implements OnInit{

  gameList: Game[];
  game: Game|undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit(){
      this.gameList = GAMES;
      const gameId: string|null = this.route.snapshot.paramMap.get('id');

      if(gameId){
        this.game = this.gameList.find(game => game.id == +gameId)
      }
    }

    goBack(){
      this.router.navigate(['/games'])
    }

  }

