import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerSerRoutingModule } from './timer-ser-routing.module';
import { SGetTimeComponent } from './s-get-time/s-get-time.component';
import { ShowCountdownComponent } from './s-get-time/show-countdown/show-countdown.component';
import { SLogComponent } from './s-get-time/s-log/s-log.component';
import { SClickCountsComponent } from './s-get-time/s-click-counts/s-click-counts.component';


@NgModule({
  declarations: [
    SGetTimeComponent,
    ShowCountdownComponent,
    SLogComponent,
    SClickCountsComponent
  ],
  imports: [
    CommonModule,
    TimerSerRoutingModule
  ]
})
export class TimerSerModule { }
