import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from '../services/http/http.service';
import { SearchResult, Weather } from '../types';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private request: HttpService) {}

  search = new FormControl(undefined);
  searchResuts: SearchResult[] | undefined;
  weather: Weather | undefined;

  ngOnInit() {
    const location = localStorage.getItem('location');
    if (location) {
      const data: SearchResult = JSON.parse(location);
      this.setLocation(data.name);
      this.search.setValue(data);
    }
    this.search.valueChanges.subscribe(async (term: string) => {
      if (!term) return;
      this.searchResuts = await this.request.locations(term);
    });
  }

  async chose(result: MatAutocompleteSelectedEvent) {
    const location: SearchResult = result.option.value;
    localStorage.setItem('location', JSON.stringify(location));
    this.setLocation(location.name);
  }

  async setLocation(name: string) {
    this.weather = await this.request.current(name);
  }

  display = (value?: SearchResult) => value?.name || '';
}
