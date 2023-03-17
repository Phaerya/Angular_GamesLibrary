import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
                                                             // Les routes se lisent du HAUT vers le BAS
                                                             //Déclarer les routes SPÉCIFIQUES en HAUT
  {  path : '', redirectTo: 'games', pathMatch: 'full'  },   //Déclarer les routes GÉNÉRALES vers le BAS
  {  path : '**', component: PageNotFoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }