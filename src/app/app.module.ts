import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';

import { AgmCoreModule } from '@agm/core';

// google maps api key : AIzaSyB4g5VnplPVtCT6mwn0SrRamUxV7Ov1Hxk


@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4g5VnplPVtCT6mwn0SrRamUxV7Ov1Hxk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
