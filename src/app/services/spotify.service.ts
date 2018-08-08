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
      'authorization': 'Bearer BQCtuP_AYGn9zIDTSPJ4r1yy_llpOOzyDQuK_tWCP7bmdKYWd5u4fuQnOnxdLk-NCqgjsJFHxAN2EKXQ42w' 
    });

    return this.http.get(url, {headers})
                .map( (resp: any)=> {
                  this.artistas = resp.artists.items;
                  return this.artistas;
                })

  }
}
