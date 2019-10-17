import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {SharedModule} from "../shared-module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule
  ]
})
export class HomeModule { }
