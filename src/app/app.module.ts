import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ApiService } from './api/api.service';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { BeerService } from './api/beer.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, BeerListComponent],
  providers: [ApiService, BeerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
