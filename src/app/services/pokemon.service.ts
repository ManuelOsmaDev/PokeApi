import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/Pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient) {}

  getPokemon(name:string){
    return this.http.get<Pokemon>(`${this.url}/${name}`)
  }
}
