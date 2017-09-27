import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/cinema.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [CinemaService]
})
export class MoviesComponent implements OnInit {

  constructor(private cinama: CinemaService) { }

  ngOnInit() {
  }

  
}
