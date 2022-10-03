import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  constructor(private api: ApiService) { }


  ngOnInit(): void {
    // this.search()
  }

  searchAlbum() {
    this.api.getAlbumData(`Madonna`, 'Madonna').subscribe(
      res => console.log(res)
    )

  }

}
