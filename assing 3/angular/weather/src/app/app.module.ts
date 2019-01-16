import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{HttpClientModule} from "@angular/common/http"

import { CountryComponent } from './country/country.component';
import { FilterPipe } from './filter.pipe';
import { DetailsComponent } from './details/details.component';
import { WeatherService } from './weather.service';
@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    FilterPipe,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
