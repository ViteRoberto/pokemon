import { Component, OnInit } from '@angular/core';
import { ListadoPokemonService } from '../servicio/listado-pokemon.service';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.page.html',
  styleUrls: ['./favs.page.scss'],
})
export class FavsPage implements OnInit {
  arrayFav = [];

  constructor(private servicio2: ListadoPokemonService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.arrayFav = this.servicio2.getFav();
    console.log(this.arrayFav);
  }
}
