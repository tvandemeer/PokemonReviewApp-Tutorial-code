import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-post-category',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-category.component.html',
  styleUrl: './post-category.component.css'
})
export class PostCategoryComponent {

  categoryForm: FormGroup;

  constructor(private pokemonService: PokemonService, private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]]
    });
  }

  postResponse: any;

  submitForm() {
    this.pokemonService.PostCategory(this.categoryForm.value)
      .subscribe(res => console.log(this.postResponse = res));
      
    this.categoryForm.reset();
  }

}
