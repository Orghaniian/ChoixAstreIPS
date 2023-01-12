import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserModule } from '@angular/platform-browser';
import {NgxSliderModule} from "@angular-slider/ngx-slider";
import {NgScrollbarModule} from "ngx-scrollbar";
import { TitlebarComponent } from './titlebar/titlebar.component';
import { ProbaBarComponent } from './proba-bar/proba-bar.component';
import { ProbaBarAllStudentsComponent } from './proba-bar-all-students/proba-bar-all-students.component';
import { WeightsControlComponent } from './weights-control/weights-control.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from "@angular/material/tooltip";



@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    ProbaBarComponent,
    ProbaBarAllStudentsComponent,
    WeightsControlComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NgSelectModule,
    NgxSliderModule,
    NgScrollbarModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
