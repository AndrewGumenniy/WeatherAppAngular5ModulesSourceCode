import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CityWeatherComponent } from './city-weather.component';

const routes = [
  { path: '', component: CityWeatherComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CityWeatherRoutingModule { }