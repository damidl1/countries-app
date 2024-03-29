import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Countries } from '../model/countries';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  allCountries = new BehaviorSubject<Countries[]>([]);

  readonly BASE_URL = 'https://restcountries.com/v3.1/region/europe';

  constructor(private http: HttpClient, private router: Router) {
    this.getAllCountries();
  }

  getAllCountries(): void {
    this.http.get<Countries[]>(this.BASE_URL).subscribe(countries => this.allCountries.next(countries));
  }
}
