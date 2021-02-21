import { FavoritesComponent } from './favorites/favorites.component';
import { MoviesComponent } from './movies/movies.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes = [
  { path: '', component: MoviesComponent },
  { path: 'favorites', component: FavoritesComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
