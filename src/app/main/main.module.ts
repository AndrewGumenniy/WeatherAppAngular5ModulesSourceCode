import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { MainComponent } from './main.component';
import { CitySearchComponent } from './city-search/city-search.component';
import { CitySearchDataService } from './shared/city-search-data.service';
import { MainRoutingModule } from './/main-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFontAwesomeModule,
    MainRoutingModule
  ],
  declarations: [MainComponent, CitySearchComponent],
  providers: [CitySearchDataService]
})
export class MainModule { }