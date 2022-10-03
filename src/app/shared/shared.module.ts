import { RoutingModule } from './../pages/routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchByAlbumComponent } from './search-by-album/search-by-album.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SearchByArtistComponent } from './search-by-artist/search-by-artist.component';
import { ArtistHistoryComponent } from './artist-history/artist-history.component';
import { AlbumHistoryComponent } from './album-history/album-history.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchBoxComponent,
    SearchByAlbumComponent,
    SearchByArtistComponent,
    ArtistHistoryComponent,
    AlbumHistoryComponent
  ],
  exports:[
    HeaderComponent,
    SearchBoxComponent,
    ArtistHistoryComponent,
    AlbumHistoryComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    FormsModule,
    MatTabsModule,
    ReactiveFormsModule

  ]
})
export class SharedModule { }
