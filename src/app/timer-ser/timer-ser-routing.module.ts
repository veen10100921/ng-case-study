import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SGetTimeComponent } from './s-get-time/s-get-time.component';

const routes: Routes = [
  {
    path: "",
    component: SGetTimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimerSerRoutingModule { }
