import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CitySearchItem } from './city-search-item';

@Injectable()
export class CitySearchDataService {

  constructor(private http: HttpClient){ }

  searchCity(city): Observable<CitySearchItem[]>{
    const params = new HttpParams()
    .set('q', city)
    .set('type', 'like')
    .set('mode', 'json')
    .set('units', 'metric')
    .set('appid', '37e8a116f937408c4043e9d7a993e7c3');
    return this.http.get('https://api.openweathermap.org/data/2.5/find', {params})
    .map(data=>{
      let forecastItemList = data["list"];   
      return forecastItemList.map(function(forecastItem:any) {
        let weatherArray = forecastItem["weather"]; 
        return {
          id: forecastItem.id, 
          city: forecastItem.name,
          country: forecastItem.sys.country,
          coordinateLat: forecastItem.coord.lat,
          coordinateLon: forecastItem.coord.lon,
          weatherInfo: weatherArray[0].description,
          weatherIcon: weatherArray[0].icon,
          temperature: forecastItem.main.temp,
          humidity: forecastItem.main.humidity,
          wind: forecastItem.wind.speed,
        };
      });
    });
  }

}