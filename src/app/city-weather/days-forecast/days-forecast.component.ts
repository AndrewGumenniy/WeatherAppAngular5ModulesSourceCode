import { Component, OnInit, Input } from '@angular/core';
import { CityWeatherItem } from '../shared/city-weather-item';

@Component({
  selector: 'app-days-forecast',
  templateUrl: './days-forecast.component.html',
  styleUrls: ['./days-forecast.component.css']
})
export class DaysForecastComponent implements OnInit {
  
  @Input() data: CityWeatherItem[] = [];
  @Input() currentPage: boolean = false;
  
  constructor() {}
  
  ngOnInit() {
  }

}