import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  constructor(public http: HttpClient) { 
    console.log('Servicio spotify ready!');
  }

  getArtistas(){
    let url = 'https://api.spotify.com/v1/search?query=metallica&type=artist&limit=20';
    
    let headers = new HttpHeaders({
      'authorization': 'Bearer BQDSqUHXVA7J0As5lm0dza1wDTvrDbGa75d0RwZ_2Fjy2B0xZInveVEA01-J70FKDRS-43fs5qbDzXvjLHw' 
    });

    return this.http.get(url, {headers});

  }
}
