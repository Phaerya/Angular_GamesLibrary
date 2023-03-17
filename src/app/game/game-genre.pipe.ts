import { Pipe, PipeTransform } from '@angular/core';

/*
 * Affiche la couleur correspondant au genre du jeu.
 * Prend en argument le type du pokémon.
 * Exemple d'utilisation:
 *   {{ game.type | gameGenreColor }}
*/
@Pipe({name: 'gameGenreColor'})
export class GameGenrePipe implements PipeTransform {

  transform(type: string): string {
  
    let color: string;
  
    switch (type) {
      case 'Action':
        color = 'red lighten-1';
        break;
      case 'Aventure':
        color = 'blue lighten-1';
        break;
      case 'RPG':
        color = 'green lighten-1';
        break;
      case 'Rogue-Like':
        color = 'brown lighten-1';
        break;
      case 'Puzzle':
        color = 'grey lighten-3';
        break;
      case 'FPS':
        color = 'blue lighten-3';
        break;
      case 'Horreur':
        color = 'deep-purple accent-1';
        break;
      case 'Coop':
        color = 'pink lighten-4';
        break;
      case 'Competitif':
        color = 'deep-purple darken-2';
        break;
      case 'Cartoon':
        color = 'lime accent-1';
        break;
      default:
        color = 'grey';
        break;
    }
  
    return 'chip ' + color;
  
  }
}