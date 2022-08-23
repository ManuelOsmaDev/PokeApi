import { Component } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title="rickandmorty"
  name!: string;
  urlImage!:string;
  tipo!:string;
  nombre!: string;
  habilidad!:string
  constructor(private pokemon: PokemonService) {}

  search() {

    this.pokemon.getPokemon(this.name).subscribe(data=>{
      console.log(data);
      this.urlImage = data.sprites.front_shiny
      this.nombre = data.name
      this.habilidad = data.abilities[0].ability.name
      this.tipo = data.types[0].type.name
    })
  }
}
