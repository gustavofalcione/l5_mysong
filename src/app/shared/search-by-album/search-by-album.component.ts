import { LocalStorageService } from 'src/app/services/local-storage.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective } from '@angular/forms';

import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

interface Album {
  albumName: string;
  artistName: string; // nome do album
  url: string;
}

@Component({
  selector: 'app-search-by-album',
  templateUrl: './search-by-album.component.html',
  styleUrls: ['./search-by-album.component.scss']
})
export class SearchByAlbumComponent implements OnInit {

  form!: FormGroup;
  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;

  public albumList: Album[] = [];
  public data!: any;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      'album': new FormControl(null, [Validators.required]),
      'artist': new FormControl(null, [Validators.required])
    });
  }

  get artist() {
    return this.form.get("artist")!;
  }

  get album() {
    return this.form.get("album")!;
  }

  onSubmitSearch() {
    let albumName = this.form.value.album;
    let artistName = this.form.value.artist;

    if (this.form.valid) {
      this.apiService.getAlbumData(albumName, artistName).subscribe(res => {
        this.data = res;
        this.albumList.unshift({albumName: this.data.album.artist, url: this.data.album.url, artistName: this.data.album.name});
        localStorage.setItem("albumData", JSON.stringify(this.albumList));
      });

      // this.localStorageService.set("albumData", this.albumList);

    }
  }
}

