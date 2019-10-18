import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {SharedModule} from "../shared-module";
import {ToolbarModule} from "../navigation/toolbar/toolbar.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    ToolbarModule
  ]
})
export class HomeModule { }
