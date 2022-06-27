import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { interval, map, Subscription, take } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-show-countdown',
  templateUrl: './show-countdown.component.html',
  styleUrls: ['./show-countdown.component.scss'],
})
export class ShowCountdownComponent {
  subscription: Subscription;
  timerValue: number = 0;
  constructor(private http: HttpService, private cd: ChangeDetectorRef) {
    this.subscription = this.http.getCountDown().subscribe((res) => {
      if (res <= 0) {
        this.timerValue = 0;
        return;
      }
      this.timerValue = res;
    });
  }
}
