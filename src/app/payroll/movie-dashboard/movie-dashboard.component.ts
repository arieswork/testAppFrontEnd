import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.css']
})
export class MovieDashboardComponent implements OnInit {

  myFavMovies = [
    {
      movieName: 'Encanto',
      genre: 'Animation',
      year: 2001
    },
    {
      movieName: 'Spider-Man: No Way Home',
      genre: 'Action',
      year: 2014
    },
    {
      movieName: "Harry Potter and the Sorcerer's Stone",
      genre: 'Fantasy',
      year: 2004
    },
    {
      movieName: 'Memento',
      genre: 'Drama',
      year: 2000
    },
    {
      movieName: 'Cast Away',
      genre: 'Drama',
      year: 2000
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  selectedMovie(e){
    console.log(e);
  }

}
