import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Beer } from './beer';

@Injectable()
export class BeerService {
  constructor(private apiService: ApiService) {}

  getBeersByAlcohol(level: number): Observable<Beer[]> {
    return this.apiService.beers$;
  }
}
