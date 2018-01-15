import { Component, OnInit } from '@angular/core';
import { CitySearchDataService } from '../shared/city-search-data.service';
import { CitySearchItem } from '../shared/city-search-item';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
  cityForecastItems: CitySearchItem[] = [];
  city: string;
  showExample: boolean = true;

  constructor(private CitySearchDataService: CitySearchDataService){}
  
  searchCity(city){
    this.CitySearchDataService.searchCity(city)
    .subscribe(data => this.cityForecastItems=data);  
  }

  ngOnInit() {
    this.searchCity("Dnipro");
  }

}