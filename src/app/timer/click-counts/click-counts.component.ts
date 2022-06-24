import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-click-counts',
  templateUrl: './click-counts.component.html',
  styleUrls: ['./click-counts.component.scss']
})
export class ClickCountsComponent implements OnInit, OnChanges {
  @Input()
  timerValue!: {
    timer: number;
    actionType: string;
    date: string;
    time: string;
    startCount: number;
    pauseCount: number;
  };
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
