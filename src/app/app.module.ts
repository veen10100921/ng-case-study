import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FloatingBannerComponent } from './floating-banner/floating-banner.component';
import { EcomCatComponent } from './ecom-cat/ecom-cat.component';
import { DynamicContentComponent } from './dynamic-content/dynamic-content.component';
import { TimerModule } from './timer/timer.module';
import { StudentMarksComponent } from './student-marks/student-marks.component';

@NgModule({
  declarations: [
    AppComponent,
    FloatingBannerComponent,
    EcomCatComponent,
    DynamicContentComponent,
    StudentMarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TimerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
