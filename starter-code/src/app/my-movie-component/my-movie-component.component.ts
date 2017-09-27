import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/cinema.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css'],
  providers: [CinemaService]
})
export class MyMovieComponentComponent implements OnInit {
allmovies = this.cinema.getmovies();
movieId:number;
  constructor(private cinema: CinemaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.movieId = Number(params['id']));
  }

}
