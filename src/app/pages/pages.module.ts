import { MatTabsModule } from '@angular/material/tabs';
import { RoutingModule } from './routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { SearchHistoryComponent } from './search-history/search-history.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchHistoryComponent,
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    MatTabsModule
  ]
})
export class PagesModule { }
