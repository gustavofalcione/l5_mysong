import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

enum METHOD_MUSIC {
  albumData = "album.getInfo",
  artistData = "artist.getInfo"
}

// interface Artist {
//   artist: {
//     name: string;
//   }
// }

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private readonly API_KEY = '130a330c46c6416759a0e93c3e558349';
  private readonly BASE_URL = `http://ws.audioscrobbler.com/2.0/?api_key=${this.API_KEY}`;

  constructor(private http: HttpClient) { }


  getAlbumData(artist: any, album: any) {
    return this.http.get<any>(`${this.BASE_URL}`, {
      params: {
        artist,
        album,
        format: 'json',
        method: METHOD_MUSIC.albumData
      }
    })
  }

  getArtistData(artist: string) {
    return this.http.get<any>(`${this.BASE_URL}`, {
      params: {
        artist,
        format: 'json',
        method: METHOD_MUSIC.artistData
      }
    })
  }
}

