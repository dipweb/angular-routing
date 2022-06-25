import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { ScienceComponent } from './science/science.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PhyscicsComponent } from './science/physcics/physcics.component';
import { ChemistryComponent } from './science/chemistry/chemistry.component';


@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    ScienceComponent,
    PageNotFoundComponent,
    HomeComponent,
    PhyscicsComponent,
    ChemistryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
