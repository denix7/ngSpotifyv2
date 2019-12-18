import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  urlSpotify: string = 'https://api.spotify.com/v1/';

  token: string = 'BQAZvu9wyQRXGja3OzytrSLWQx1uYaNOfZ0ZkY5xINe5uipiOrqPN9KYWr5EKP8B0CDsCGe1kDGeebNlai0';

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
                  console.log('res', resp)
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
