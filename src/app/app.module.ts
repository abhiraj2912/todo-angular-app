import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtoComponent } from './addto/addto.component';
import { ViewallComponent } from './viewall/viewall.component';

@NgModule({
  declarations: [
    AppComponent,
    AddtoComponent,
    ViewallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
