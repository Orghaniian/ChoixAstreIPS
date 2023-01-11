import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserModule } from '@angular/platform-browser';
import {NgxSliderModule} from "@angular-slider/ngx-slider";
import {NgScrollbarModule} from "ngx-scrollbar";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NgSelectModule,
    NgxSliderModule,
    NgScrollbarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
