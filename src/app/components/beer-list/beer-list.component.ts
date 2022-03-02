import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../../api/beer';
import { BeerService } from '../../api/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
})
export class BeerListComponent implements OnInit {
  public beers: Beer[] = [];
  constructor(private beerService: BeerService) {
    beerService.getBeersByAlcohol(2).subscribe((v) => {
      console.log(v);
      this.beers = v;
    });
  }

  ngOnInit() {}
}
