import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl: string = "https://localhost:7187/api/";

  constructor(private http: HttpClient) { }

  GetCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl + "Category");
  }

  PostCategory(newCat: any) {
    return this.http.post<any>(this.apiUrl + "Category", newCat);
  }

  GetCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + "Country");
  }
}
