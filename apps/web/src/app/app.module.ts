import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavigationModule } from '@web/ui';
import { PagesModule } from '@web/pages';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NavigationModule,
    RouterModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
