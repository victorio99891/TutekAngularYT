import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestCompoComponent } from './test-compo/test-compo.component';
import { TestCompo2Component } from './test-compo2/test-compo2.component';
import { TestCompo3Component } from './test-compo3/test-compo3.component';
import { TestCompo4Component } from './test-compo4/test-compo4.component';
import {FormsModule} from '@angular/forms';
import { TestCompo5Component } from './test-compo5/test-compo5.component';
import { TestCompo6Component } from './test-compo6/test-compo6.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCompoComponent,
    TestCompo2Component,
    TestCompo3Component,
    TestCompo4Component,
    TestCompo5Component,
    TestCompo6Component,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
