import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule} from '@angular/material'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeepComponent } from './keep/keep.component';

@NgModule({
  declarations: [
    AppComponent,
    KeepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
