import { ApiService } from './../../services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';

interface Artist {
  name: string;
  url: string;
  date: string;
}

@Component({
  selector: 'app-search-by-artist',
  templateUrl: './search-by-artist.component.html',
  styleUrls: ['./search-by-artist.component.scss']
})
export class SearchByArtistComponent implements OnInit {

  form!: FormGroup;
  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;


  public artistList: Artist[] = [];
  public data!: any;

  constructor(
    private apiService: ApiService,
    private router: Router
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

  setDate() {
    return new Date().toLocaleString('pt-BR', { year: '2-digit', month: '2-digit', day: '2-digit' })
  }

  onSubmitSearch() {
    let artistName = this.form.value.artist;

    if (this.form.valid) {
      this.apiService.getArtistData(artistName).subscribe((res) => {
        this.data = res.artist;
        this.form.reset();
        this.formDirective.resetForm();
        this.artistList.unshift({name: this.data?.name, url: this.data?.url, date: this.setDate()});
        localStorage.setItem("artistData", JSON.stringify(this.artistList));
        this.router.navigate(['history']);
      });
    }

  }
}

