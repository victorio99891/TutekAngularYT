import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestCompoComponent } from './test-compo/test-compo.component';
import { TestCompo2Component } from './test-compo2/test-compo2.component';
import { TestCompo3Component } from './test-compo3/test-compo3.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCompoComponent,
    TestCompo2Component,
    TestCompo3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
