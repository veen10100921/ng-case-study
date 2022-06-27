import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription, interval, take, map } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-s-get-time',
  templateUrl: './s-get-time.component.html',
  styleUrls: ['./s-get-time.component.scss'],
})
export class SGetTimeComponent implements OnInit {
  pauseLogArray: any[] = [];
  getTimerObj: {
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
  getTimer: number = 0;
  count: number = 0;
  sCount: number = 0;
  pCount: number = 0;
  actionType: string = '';
  date: string = '';
  time: string = '';
  @ViewChild('getTimer')
  getTimerIp!: ElementRef;
  countDownSubscriber: Subscription = new Subscription();

  constructor(private http: HttpService) {}

  ngOnInit(): void {}

  /**
   * Shares data to service
   */
  shareData() {
    this.countdownTimerObj();
    this.startCoundown();
    this.http.shareData(this.getTimerObj);
  }

  /**
   * Resets timer
   */
  resetTimer() {
    this.unsubscribeObs();
    this.count = 0;
    this.sCount = 0;
    this.pCount = 0;
    this.formatDateTime();
    this.getTimer = 0;

    this.getTimerObj.timer = 0;
    this.getTimerObj.actionType = 'Reset';
    this.getTimerObj.date = this.date;
    this.getTimerObj.time = this.time;
    this.getTimerObj.startCount = 0;
    this.getTimerObj.pauseCount = 0;
    this.http.shareData(this.getTimerObj);
    this.http.countDownDataFn(this.getTimerObj.timer);
  }

  /**
   * Countdowns timer obj
   */
  countdownTimerObj() {
    this.formatDateTime();
    this.count++;
    this.actionType = this.getTimerObj.actionType;
    this.getTimerObj.timer = +this.getTimer;
    this.getTimerObj.actionType = this.count % 2 == 0 ? 'Pause' : 'Start';
    this.getTimerObj.date = this.date;
    this.getTimerObj.time = this.time;
    if (this.count % 2 != 0) {
      this.sCount++;
      this.getTimerObj.startCount = this.sCount;
    }
    if (this.count % 2 == 0) {
      this.pCount++;
      this.getTimerObj.pauseCount = this.pCount;
      this.pauseLogArray.push(this.getTimerObj.timer);
    }
  }

  /**
   * Starts coundown
   * @returns
   */
  startCoundown() {
    if (this.getTimerObj.actionType.toLowerCase() === 'pause') {
      this.getTimer = this.getTimerObj.timer;
      this.unsubscribeObs();
      return;
    }
    if (
      this.getTimerObj.actionType.toLowerCase() === 'start' &&
      this.getTimerObj.startCount <= 1
    ) {
      this.getTimer = +this.getTimerIp.nativeElement.value;
    }
    if (this.getTimerObj.startCount > 1) {
      this.getTimer = this.getTimerObj.timer;
    }
    this.countDownSubscriber = interval(1000)
      .pipe(
        take(+this.getTimer),
        map((count) => +this.getTimer - 1)
      )
      .subscribe((timer) => {
        this.getTimer = timer;
        this.getTimerObj.timer = this.getTimer;
        this.http.countDownDataFn(timer);
      });
  }

  /**
   * Formats date time
   */
  formatDateTime() {
    // Format date
    const date_format = (date: Date) => date.toISOString().slice(0, 10);
    this.date = date_format(new Date());
    // Format time
    const time_format = new Date();
    this.time = time_format.toLocaleTimeString();
  }

  /**
   * Unsubscribes obs
   */
  unsubscribeObs() {
    this.countDownSubscriber.unsubscribe();
  }
}
