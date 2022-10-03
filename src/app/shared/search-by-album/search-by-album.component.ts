import { LocalStorageService } from 'src/app/services/local-storage.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective } from '@angular/forms';

import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

interface Album {
  albumName: string; // nome do album
  artistName: string;
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
    const hasArtistInLocal = JSON.parse(localStorage.getItem("albumData") || '[]');
    if (hasArtistInLocal.length) {
      this.albumList = hasArtistInLocal
    }
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
        this.data = res.album;
        this.form.reset();
        this.formDirective.resetForm();
        this.albumList.unshift({albumName: this.data.artist, url: this.data.url, artistName: this.data.name});
        localStorage.setItem("albumData", JSON.stringify(this.albumList));
      });

      // this.localStorageService.set("albumData", this.albumList);

    }
  }
}

