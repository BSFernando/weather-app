import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditFormatValuesService {

  formatter = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });

  convertDegreeToCompassPoint(windDeg: number): string {
    const compassPoints = [
      'N', 'NNE', 'NE', 'ENE',
      'E', 'ESE', 'SE', 'SSE',
      'S', 'SSO', 'SO', 'OSO',
      'O', 'ONO', 'NO', 'NNO'
    ];
    const index = Math.floor((windDeg / 22.5) + 0.5) % 16;
    return compassPoints[index];
  }

  formatUnixTimeToTimeString(unixTime: number): string {
    return new Date(unixTime * 1000).toTimeString().split(' ')[0];
  }

  setCloudIcon(icon: string): string {
    if(icon !== undefined){
      return "https://openweathermap.org/img/wn/" + icon  + ".png";
    }else{
      return ''
    }
  }
}
