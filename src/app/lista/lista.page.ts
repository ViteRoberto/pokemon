import { Component, OnInit } from '@angular/core';
import { ListadoPokemonService } from '../servicio/listado-pokemon.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  lista1:any;
  constructor(private servicio1: ListadoPokemonService) { }

  ngOnInit() {
    this.servicio1.obtenerInfo('https://pokeapi.co/api/v2/pokemon/').subscribe(data => {
      console.log(data);
      this.lista1=data;
    });
  }

  favorito(id){
    this.servicio1.setFav(id);
  }

}
