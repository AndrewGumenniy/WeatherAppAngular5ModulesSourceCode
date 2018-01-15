import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { CityWeatherComponent } from './city-weather.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { DaysForecastComponent } from './days-forecast/days-forecast.component';
import { CityWeatherDataService } from './shared/city-weather-data.service';
import { CityWeatherRoutingModule } from './/city-weather-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    CityWeatherRoutingModule
  ],
  declarations: [CityWeatherComponent, TabsComponent, TabComponent, CurrentWeatherComponent, DaysForecastComponent],
  providers: [CityWeatherDataService]
})
export class CityWeatherModule { }