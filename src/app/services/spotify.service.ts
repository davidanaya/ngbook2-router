import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class SpotifyService {

  static BASE_URL: string = 'https://api.spotify.com/v1';

  constructor(public http: Http) {
  }

  query(url: string, params?: Array<string>): Observable<any[]> {
    let queryUrl: string = `${SpotifyService.BASE_URL}${url}`;
    if (params) {
      queryUrl = `${queryUrl}?${params.join('&')}`;
    }
    return this.http.request(queryUrl).map((res: any) => res.json());
  }

  search(query: string, type: string): Observable<any[]> {
    return this.query(`/search`, [
      `q=${query}`,
      `type=${type}`
    ]);
  }

  searchTrack(query: string): Observable<any[]> {
    return this.search(query, 'track');
  }

  getTrack(id: string): Observable<any[]> {
    return this.query(`/tracks/${id}`);
  }

  getAlbum(id: string): Observable<any[]> {
    return this.query(`/albums/${id}`);
  }

  getArtist(id: string): Observable<any[]> {
    return this.query(`/artists/${id}`);
  }

}

export var SPOTIFY_PROVIDERS: Array<any> = [
  { provide: SpotifyService, useClass: SpotifyService }
];
