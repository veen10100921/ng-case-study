import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicContentComponent } from './dynamic-content/dynamic-content.component';
import { EcomCatComponent } from './ecom-cat/ecom-cat.component';
import { FloatingBannerComponent } from './floating-banner/floating-banner.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  { path: "", redirectTo: "/banner", pathMatch: "full" },
  { path: "banner", component: FloatingBannerComponent },
  { path: "grid", component: EcomCatComponent },
  { path: "student", component: StudentMarksComponent },
  { path: "dynamic", component: DynamicContentComponent },
  { path: 'timer', loadChildren: () => import('./timer/timer.module').then(m => m.TimerModule) },
  {path:'sTimer', loadChildren: () => import('./timer-ser/timer-ser.module').then(m => m.TimerSerModule)},
  { path: "*", component: FloatingBannerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
