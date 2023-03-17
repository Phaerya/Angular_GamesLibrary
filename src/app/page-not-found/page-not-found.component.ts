import { Component } from '@angular/core';
  
@Component({
    selector: 'page-404',
    template: `
    <div class='center'>
      <img src="https://i.imgflip.com/1qbecy.jpg"/>
      <h1>Dommage pour vous, cette page n'existe pas</h1>
      <a routerLink="/games" class="waves-effect waves-teal btn-flat">
        Retourner à l'accueil
      </a>
    </div>
  `
})

export class PageNotFoundComponent { }
