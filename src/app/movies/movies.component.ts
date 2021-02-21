import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(public movieservice: MovieService) { }

  ngOnInit(): void { 
    this.movieservice.getMovies()
  }
//addMovie (arryofMovies: Movies[]) :Movies[] {
//let wishlistAdd: Movies = {
  
//}
//arryofMovies.push(wishlistAdd)
//}
addFavorites(movie){
  this.movieservice.favorites.push(movie)
}
}
