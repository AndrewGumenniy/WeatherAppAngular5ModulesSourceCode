import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { CityWeatherItem } from './shared/city-weather-item';
import { CityWeatherDataService } from './shared/city-weather-data.service';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {
  id: number;
  currentWeather:CityWeatherItem[] = [];
  daysForecast:CityWeatherItem[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private CityWeatherDataService: CityWeatherDataService) {}

  currentWeatherRequest(id: number){
    this.CityWeatherDataService.currentWeather(id)
    .subscribe(data => this.currentWeather=data.slice(0,1));  
  }

  daysForecastRequest(id: number){
    this.CityWeatherDataService.daysForecast(id)
    .subscribe(data => this.daysForecast=data);  
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
    this.daysForecastRequest(this.id);
    this.currentWeatherRequest(this.id);
  }

}
