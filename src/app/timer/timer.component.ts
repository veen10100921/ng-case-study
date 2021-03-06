import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit, OnChanges {
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
  ngOnChanges(changes: SimpleChanges): void {

  }
  pausedValue!: number;
  ngOnInit(): void {

  }

  /**
   * Gets data from show timer
   * @param timer
   */
  fromShowTimer(timer: any) {
    this.timerValue = timer;
  }
  /**
   * Resets timer
   * @param timer
   */
  resetTimer(timer: any) {
    this.timerValue = timer;
  }
}
