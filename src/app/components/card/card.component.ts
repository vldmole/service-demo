import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonData } from '../../models/pokemonData';

@Component({
  selector: 'app-card',
  imports: [NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  pokemonData: PokemonData = new PokemonData;

  constructor(private service: PokemonService)
  {
    //nothing for while
  }

  ngOnInit(): void {
    this.pokemonData.name="charizard";
    this.service.getPokemon(this.pokemonData.name).subscribe({

      next: (pokemonData => this.pokemonData = pokemonData),
      error: err=>err
    });
  }


}
