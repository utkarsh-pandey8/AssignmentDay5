import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompareNumbersComponent } from './compare-numbers/compare-numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    CompareNumbersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
