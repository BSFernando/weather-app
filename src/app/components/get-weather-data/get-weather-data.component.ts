import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestDataService } from '../../services/request-data.service';
import { catchError, of } from 'rxjs';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { EditFormatValuesService } from '../../services/edit-format-values.service';
import * as dataJson from '../../../assets/data.json';

interface WeatherResponse {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: { description: string, icon: string }[];
  wind: { speed: number; deg: number };
  visibility: number;
  sys: { sunrise: number; sunset: number };
  name: string;
}


@Component({
  imports: [
    CommonModule,
    FormsModule
  ],
  selector: 'app-get-weather-data',
  standalone: true,
  animations: [
    trigger('openClose', [

      state('open', style({ opacity: 0 })),
      state('closed', style({ opacity: 1 })),
      transition('* <=> *', [
        animate('3s ease-in-out', keyframes([
          style({ opacity: 0}),
          style({ opacity: 1})
        ]))
      ]),

    ]),
  ],
  templateUrl: './get-weather-data.component.html',
  styleUrl: './get-weather-data.component.css'
})
export class GetWeatherDataComponent {

  dataTeste = dataJson;
  alert = false;
  changeOpacity = false;
  cityChoice = '';

  tempMin?: number;
  tempMax?: number;
  feelsLike?: number;
  temp?: number;
  clouds?: string;
  iconCloud?: string;
  humidity?: number;
  windSpeedKmH?: number;
  windDirection?: string;
  cityName?: string;
  pressure?: number;
  visibilityKm?: number;
  sunriseTime?: string;
  sunsetTime?: string;
  data?: string;


  private requestDataService = inject(RequestDataService);
  private editFormatValuesService = inject(EditFormatValuesService);

  private mapWeatherData(response: WeatherResponse): void {

    console.log(response)
    this.tempMin = response.main.temp_min;
    this.tempMax = response.main.temp_max;
    this.feelsLike = response.main.feels_like;
    this.temp = response.main.temp;
    this.clouds = response.weather[0].description;
    this.iconCloud = this.editFormatValuesService.setCloudIcon(response.weather[0].icon)
    this.humidity = response.main.humidity;
    this.windSpeedKmH = Number((response.wind.speed * 3.6).toFixed(1));
    this.windDirection = this.editFormatValuesService.convertDegreeToCompassPoint(response.wind.deg);
    this.cityName = response.name;
    this.pressure = response.main.pressure;
    this.visibilityKm = Number((response.visibility / 1000).toFixed(1));
    this.sunriseTime = this.editFormatValuesService.formatUnixTimeToTimeString(response.sys.sunrise);
    this.sunsetTime = this.editFormatValuesService.formatUnixTimeToTimeString(response.sys.sunset);
    this.data = this.editFormatValuesService.formatter.format(new Date());
    
  }

  displayAlertMsg() {
    this.alert = false
  }

  ngOnInit() {
    this.getData("São Paulo");
  }

  getData(city: string) {

    this.changeOpacity = true;
    this.requestDataService.getDataWeatherByCity(city)
      .pipe(
        catchError((error) => {
          // this.alert = true;
          this.changeOpacity = false;
          return of(null);
        })
      )
      .subscribe(
        (response: WeatherResponse | null) => {
          if(response){
            this.cityChoice='';
            this.changeOpacity = false;
            this.mapWeatherData(response);
          }else{
            console.log(this.dataTeste)
            this.mapWeatherData(this.dataTeste.data[Math.floor(Math.random() * this.dataTeste.data.length)]);
          }
        }
      )

  }
}
