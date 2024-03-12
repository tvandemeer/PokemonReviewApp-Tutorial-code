import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { DecimalPipe } from '@angular/common';

interface ICountry {
  id: number;
  name: string;
}

class Country implements ICountry {
  id: number = NaN;
  name: string = "";
}

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent implements OnInit {

  constructor(private pokemonService: PokemonService) {}

  countries: Country[] = [];

  ngOnInit(): void {
    this.pokemonService.GetCountries()
      .subscribe(res => this.countries = res);
  }

}
