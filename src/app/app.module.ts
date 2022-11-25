import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtoComponent } from './addto/addto.component';
import { ViewallComponent } from './viewall/viewall.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

const myroute:Routes=[
  {
    path:"",
    component:AddtoComponent
  },
  {
    path:"view",
    component:ViewallComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddtoComponent,
    ViewallComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
