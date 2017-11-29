import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
