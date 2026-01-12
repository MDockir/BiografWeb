import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  private baseUrl = 'https://localhost:7273/api';

  constructor(private http: HttpClient) {}

  // 1. Hent film
  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Films`);
  }
    getSal(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Sals`);
  }
      getCinema(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Cinemas`);
  }
  } 