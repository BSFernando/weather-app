import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RequestDataService {

  apiWeatherUrl = environment.apiWeatherUrl
  apiKey = environment.apiKey

  constructor(private http: HttpClient) {}

  getDataWeatherByCity(city: string): Observable<any> {

    return this.http.get(this.apiWeatherUrl + `${city}&units=metric&lang=pt_br&appid=${this.apiKey}`)
    
  }
}

