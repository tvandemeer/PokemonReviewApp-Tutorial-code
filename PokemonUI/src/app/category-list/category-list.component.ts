import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Category } from '../models/Category';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.GetCategories()
      .subscribe(res => this.categories = res);
  }

}
