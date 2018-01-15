import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CityWeatherItem } from './city-weather-item';

@Injectable()
export class CityWeatherDataService {

  constructor(private http: HttpClient){ }

  daysForecast(id): Observable<CityWeatherItem[]>{
    const params = new HttpParams()
    .set('id', id)
    .set('mode', 'json')
    .set('units', 'metric')
    .set('appid', '37e8a116f937408c4043e9d7a993e7c3');
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast', {params})
    .map(data=>{
      let forecastItemList = data["list"];
      return forecastItemList.map(function(forecastItem:any) {
        let weatherArray = forecastItem["weather"];           
        return {       
          weatherInfo: weatherArray[0].description,
          weatherIcon: weatherArray[0].icon,
          temperature: forecastItem.main.temp,
          humidity: forecastItem.main.humidity,
          wind: forecastItem.wind.speed,
          cloudiness: forecastItem.clouds.all,
          time: forecastItem.dt
        };
      });
    });
  } 

  currentWeather(id): Observable<CityWeatherItem[]>{
    const params = new HttpParams()
    .set('id', id)
    .set('type', 'like')
    .set('mode', 'json')
    .set('units', 'metric')
    .set('appid', '37e8a116f937408c4043e9d7a993e7c3');
    return this.http.get('https://api.openweathermap.org/data/2.5/weather', {params})
    .map(data=>{       
      let weatherArray = data["weather"];               
      return weatherArray.map(function(forecastItem:any) {                             
        return {
          id: data["id"], 
          city: data["name"],
          country: data["sys"].country,
          coordinateLat: data["coord"].lat,
          coordinateLon: data["coord"].lon,
          weatherInfo: forecastItem.description,
          weatherIcon: forecastItem.icon,
          temperature: data["main"].temp,
          humidity: data["main"].humidity,
          wind: data["wind"].speed,
          cloudiness: data["clouds"].all
        };
      });
    });
  }
}