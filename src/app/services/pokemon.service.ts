import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.dev';
import { HttpClient } from '@angular/common/http';
import { PokemonData } from '../models/pokemonData';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl: string = "";

  constructor(private httpClient:   HttpClient) {
    this.baseUrl = environment.pokeapi;
  }

  getPokemon(name: string){
    console.log(this.baseUrl+name);
    return this.httpClient.get<PokemonData>(`${this.baseUrl}${name}`);
  }
}
