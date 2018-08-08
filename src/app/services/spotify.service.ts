import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  constructor(public http: HttpClient) { 
    console.log('Servicio spotify ready!');
  }

  getArtistas(termino: string){
    let url = `https://api.spotify.com/v1/search?query=${termino}&type=artist&limit=20`;
    
    let headers = new HttpHeaders({
      'authorization': 'Bearer BQCeljOL8P_qT7pqkk5_4cs6L0cBsne_blHv0kUDi2ECWbf4vbPFM-o533i54CW96x_kUZPMJ_IfNUAbF9o' 
    });

    return this.http.get(url, {headers})
                .map( (resp: any)=> {
                  this.artistas = resp.artists.items;
                  return this.artistas;
                })

  }
}
