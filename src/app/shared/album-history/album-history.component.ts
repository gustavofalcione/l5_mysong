import { Component, OnInit } from '@angular/core';

interface AlbumInLocalStorage {
  albumName: string; // nome do album
  artistName: string;
  url: string;
  date: string;
}
@Component({
  selector: 'app-album-history',
  templateUrl: './album-history.component.html',
  styleUrls: ['./album-history.component.scss']
})
export class AlbumHistoryComponent implements OnInit {

  public albumData: AlbumInLocalStorage[] = JSON.parse(localStorage.getItem("albumData") || '[]');

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(i: number) {
    const dataParsed = this.albumData;
    dataParsed.splice(i, 1);
    localStorage.setItem("albumData", JSON.stringify(dataParsed));
    this.albumData = dataParsed;
  }

}
