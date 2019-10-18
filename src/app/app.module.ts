import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { HomeModule } from './home/home.module';
import {SharedModule} from "./shared-module";
import { HeaderComponent } from './navigation/header/header.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import {ToolbarModule} from "./navigation/toolbar/toolbar.module";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    HomeModule,
    SharedModule,
    ToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
