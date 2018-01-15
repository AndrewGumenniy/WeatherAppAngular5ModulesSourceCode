import { Component, OnInit, Input } from '@angular/core';
import { CityWeatherItem } from '../shared/city-weather-item';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  today: number = Date.now();
  @Input() data: CityWeatherItem[] = [];
  
  constructor(){}

  ngOnInit() {
  }

}