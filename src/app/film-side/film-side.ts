import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/film-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Movie {
  id: number;
  name: string;
  description: string;
  ageLimit: number;
  durationMinutes: number;
}

@Component({
  selector: 'app-film-side',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './film-side.html',
  styleUrls: ['./film-side.css'],  // rettet
})
export class FilmComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  selectedMovie: Movie | null = null;
  searchText: string = '';

  constructor(private cinemaService: CinemaService) {}

  ngOnInit(): void {
    this.cinemaService.getMovies().subscribe(data => {
      this.movies = data;
      this.filteredMovies = data;
    });
  }

  // Når man vælger en film fra dropdown
  selectMovie(movieId: string) {
    const id = Number(movieId); // convert string → number
    this.selectedMovie = this.movies.find(m => m.id === id) || null;
  }

  // Søgefunktion
  search() {
    const text = this.searchText.toLowerCase();
    this.filteredMovies = this.movies.filter(m =>
      m.name.toLowerCase().includes(text)
    );
  }
}
