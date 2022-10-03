import { Component, OnInit } from '@angular/core';

interface ArtistsInLocalStorage {
  name: string;
  url: string;
  date: string;
}

@Component({
  selector: 'app-artist-history',
  templateUrl: './artist-history.component.html',
  styleUrls: ['./artist-history.component.scss']
})
export class ArtistHistoryComponent implements OnInit {

  public artistData: ArtistsInLocalStorage[] = JSON.parse(localStorage.getItem("artistData") || '[]');

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(i: number | string) {
    const dataParsed = JSON.parse(localStorage.getItem("artistData") || '[]');
    dataParsed.splice(i, 1);
    console.log(dataParsed);
    localStorage.setItem("artistData", JSON.stringify(dataParsed));
    this.artistData = dataParsed;
  }
}
