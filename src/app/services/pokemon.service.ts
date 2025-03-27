import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.dev';
import { HttpClient } from '@angular/common/http';
import { PokemonData } from '../models/pokemonData';
import { Observable, OperatorFunction, UnaryFunction } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl: string = "";

  constructor(private httpClient:   HttpClient) {
    this.baseUrl = environment.pokeapi;
  }

  getPokemon(name: string):Observable<PokemonData>
  {
    console.log(this.baseUrl+name);

    return this.httpClient.get<any>(`${this.baseUrl}${name}`)
      .pipe((observable)=> new Observable<PokemonData>(observer =>
        {
          observable.subscribe(value =>
          {
            const pokemonData: PokemonData = new PokemonData();
            pokemonData.id = value.id;
            pokemonData.name = value.name;

            const types = value.types;
            pokemonData.types = types.map((item: { type: { name: string; }; })=>item.type.name);

            const abilities = value.abilities;
            pokemonData.abilities = abilities.map((item: { ability: { name: string; }; })=>item.ability.name);

            const sprites = value.sprites;
            pokemonData.imgUlrs.push(sprites.front_default);

            observer.next(pokemonData);
          })
        }));

  }
}


