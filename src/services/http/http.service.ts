import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResult, Weather } from '../../types';

const key = 'f33376e7013040558ec114521211510';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  locations(value: string) {
    return this.http
      .get<SearchResult[]>(
        `http://api.weatherapi.com/v1/search.json?key=${key}&q=${value}`
      )
      .toPromise();
  }

  current(location: string) {
    return this.http
      .get<Weather>(
        `http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`
      )
      .toPromise();
  }
}
