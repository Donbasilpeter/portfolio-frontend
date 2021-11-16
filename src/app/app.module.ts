import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchStocksComponent } from './components/search-stocks/search-stocks.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { GraphComponent } from './components/graph/graph.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material.module';
import { DateRangeComponent } from './components/date-range/date-range.component';
import { BacktestComponent } from './pages/backtest/backtest.component';
import { HomeComponent } from './pages/home/home.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    SearchStocksComponent,
    PortfolioComponent,
    GraphComponent,
    DateRangeComponent,
    BacktestComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
