import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListadoPokemonService } from '../servicio/listado-pokemon.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  lista1:any;
  idPokemon:string;
  nombrePokemon:string;

  constructor( private rutaActivada: ActivatedRoute, private servicio1: ListadoPokemonService) { }

  ionViewWillEnter(){
    this.idPokemon = this.rutaActivada.snapshot.paramMap.get('id');
    this.nombrePokemon = this.rutaActivada.snapshot.paramMap.get('nombre');
    this.servicio1.obtenerInfo('https://pokeapi.co/api/v2/pokemon/'+this.idPokemon+'/').subscribe(data => {
      console.log(data);
      this.lista1=data;
    });
  }

  ngOnInit() {
  }

}
