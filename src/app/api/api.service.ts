import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Beer } from './beer';

@Injectable()
export class ApiService {
  private _endpoint = 'https://api.punkapi.com/v2/beers';
  private _beers$ = new BehaviorSubject<any>({});
  beers$ = this._beers$.asObservable();

  constructor(private http: HttpClient) {
    this.getBeers();
  }

  private getBeers() {
    this.http.get(this._endpoint).subscribe((value: Beer[]) => {
      this._beers$.next(value);
    });
  }
}
