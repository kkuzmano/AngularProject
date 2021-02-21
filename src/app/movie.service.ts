import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies} from './movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  movieurl: string = "https://api.themoviedb.org/3/discover/movie?api_key=28ab2ce3c7fdb22a7ee10aed18597eaf&sort_by=popularity.desc"
  public movies: Movies[] = []
  public favorites: Movies[]= []

  getMovies(){
    this.http.get(this.movieurl).subscribe(
      (response:any) => {
        console.log(response);
        this.movies=response.results 
      }, 
      (error) => {
        console.log (error);
      }
      )
  }
}

