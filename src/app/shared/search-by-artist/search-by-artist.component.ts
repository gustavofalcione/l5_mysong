import { ApiService } from './../../services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';

interface Teste {
  name: string;
  url: string;
}

@Component({
  selector: 'app-search-by-artist',
  templateUrl: './search-by-artist.component.html',
  styleUrls: ['./search-by-artist.component.scss']
})
export class SearchByArtistComponent implements OnInit {

  form!: FormGroup;
  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;


  public artistList: Teste[] = [];
  public data!: any;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.initForm();
    const hasArtistInLocal = JSON.parse(localStorage.getItem("artistData") || '[]');
    if (hasArtistInLocal.length) {
      this.artistList = hasArtistInLocal
    }
  }

  initForm() {
    this.form = new FormGroup({
      'artist': new FormControl(null, [Validators.required])
    });
  }

  get artist() {
    return this.form.get("artist")!;
  }

  onSubmitSearch() {
    let artistName = this.form.value.artist;
    console.log(artistName)

    if (this.form.valid) {
      this.apiService.getArtistData(artistName).subscribe((res) => {
        this.data = res.artist;
        this.form.reset();
        this.formDirective.resetForm();
        this.artistList.unshift({name: this.data?.name, url: this.data.url});
        this.localStorageService.set("artistData", JSON.stringify(this.artistList));
      });

    }

  }
}

