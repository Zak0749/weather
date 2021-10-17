import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../theme/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '../services/http/http.module';
import { MainComponent } from './main/main.component';
import { InfoCardComponent } from './info-card/info-card.component';

@NgModule({
  declarations: [AppComponent, MainComponent, InfoCardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
