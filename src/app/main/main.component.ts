import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '../../types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @Input() weather: Weather | undefined = undefined;

  hello() {
    console.log('hello world', this.weather);
  }

  current = this.weather?.current;
  location = this.weather?.location;

  fomatInfo(title: string | undefined, info: string | undefined) {
    return {
      title,
      info,
    };
  }

  get items() {
    return [
      this.fomatInfo(
        'Tempreture',
        this.weather?.current.temp_c.toString() + '°'
      ),
      this.fomatInfo(
        'Feels like',
        `${this.weather?.current.feelslike_c.toString()}°`
      ),
      this.fomatInfo('Humidity', `${this.weather?.current.humidity}%`),
      this.fomatInfo('Condition', this.weather?.current.condition.text),
      this.fomatInfo(
        'Wind Speed',
        this.weather?.current.wind_kph.toString() + 'km/hr'
      ),
      this.fomatInfo('Wind Direction', this.weather?.current.wind_dir),
    ];
  }
}
