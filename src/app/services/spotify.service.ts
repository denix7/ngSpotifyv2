import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  urlSpotify: string = 'https://api.spotify.com/v1/';

  token: string = 'BQBJ8yYixV-Qc_S17wHMBGG0a6vyHx3gqRDdtxWnsyAo8LusvBEydYryKiZp9-sxVnLYK0JHgDodMaMIxrc';

  constructor(public http: HttpClient) { 
    console.log('Servicio spotify ready!');
  }

  private getHeaders(): HttpHeaders{
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token 
    });

    return headers;
  }

  getArtista(id: string){
    let url = `${this.urlSpotify}artists/${id}`;
    
    let headers = this.getHeaders();

    return this.http.get(url, {headers})

  }

  getArtistas(termino: string){
    let url = `${this.urlSpotify}search?query=${termino}&type=artist&limit=20`;
    
    let headers = this.getHeaders();

    return this.http.get(url, {headers})
                .map( (resp: any)=> {
                  this.artistas = resp.artists.items;
                  return this.artistas;
                })

  }

  getTop(id: string){
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=US`;

    let headers = this.getHeaders();

    return this.http.get(url, {headers})
  }
}
