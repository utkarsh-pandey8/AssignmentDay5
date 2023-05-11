import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies:any[]
  constructor()
  {
    this.movies = [
      {
        title:'Evil Dead Rise',
        genre:'horror',
        director:'Lee Cronin'
      },
      {
        title:'Top Gun',
        genre:'action',
        director:'Tony Scott'
      },
      {
        title:'Avengers',
        genre:'Action/Superhero',
        director:'Russo Brothers'
      },
      {
        title:'Oppenheimer',
        genre:'action',
        director:'Christopher Nolan'
      },
      {
        title:'Zoolander',
        genre:'comedy',
        director:'Joy man'
      }
    ]
  }

  public getMovies()
  {
    return this.movies
  }  
  
  ngOnInit(): void {
    
  }
}
