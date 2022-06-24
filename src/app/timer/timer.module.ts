import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerRoutingModule } from './timer-routing.module';
import { ClickCountsComponent } from './click-counts/click-counts.component';
import { GetTimerComponent } from './get-timer/get-timer.component';
import { LogTimeComponent } from './log-time/log-time.component';
import { ShowTimerComponent } from './show-timer/show-timer.component';
import { TimerComponent } from './timer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TimerComponent,
    ShowTimerComponent,
    LogTimeComponent,
    GetTimerComponent,
    ClickCountsComponent
  ],
  imports: [
    CommonModule,
    TimerRoutingModule,
    FormsModule
  ]
})
export class TimerModule { }
