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

  name: string = "CHARIZARD";
  abilities: string[] = ["FIRE", "ROCK"];

  constructor(private service: PokemonService)
  {
    //nothing for while
  }

  ngOnInit(): void {
    this.service.getPokemon(this.name).subscribe({
      next: (pokemonData: PokemonData | any)=>{
              console.log(pokemonData);
            this.abilities = pokemonData.abilities.map((item:any)=> item.ability.name);
            console.log(this.abilities);
      },
      error: (err:any)=>console.log(err)
    });
  }


}
