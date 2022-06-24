import {
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  interval,
  Observable,
  ObservableInput,
  Subject,
  Subscription,
  takeUntil,
} from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-show-timer',
  templateUrl: './show-timer.component.html',
  styleUrls: ['./show-timer.component.scss'],
})
export class ShowTimerComponent {
  @Input()
  timerValue: {
    timer: number;
    actionType: string;
    date: string;
    time: string;
    startCount: number;
    pauseCount: number;
  } = {
    timer: 0,
    actionType: '',
    date: '',
    time: '',
    startCount: 0,
    pauseCount: 0,
  };
  constructor() {}

}
