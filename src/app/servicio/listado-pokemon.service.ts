import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListadoPokemonService {

  favo = [];
  constructor( private conHttp: HttpClient ) {}

  obtenerInfo(url){
    return this.conHttp.get(`${url}`);
  }

  setFav(fav){
    this.favo.push(fav);
  }

  getFav(){
    return this.favo;
  }
}
