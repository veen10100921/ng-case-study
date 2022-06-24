import { Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-log-time',
  templateUrl: './log-time.component.html',
  styleUrls: ['./log-time.component.scss'],
})
export class LogTimeComponent implements OnInit, OnChanges {
  @Input()
  timerValue!: {
    timer: number;
    actionType: string;
    date: string;
    time: string;
    startCount: number;
    pauseCount: number;
  };
  @ViewChild('showLogs', { static: false })
  showLogs!: ElementRef;
  constructor(private renderer:Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Log component: ", this.timerValue);
    if(this.timerValue.actionType == ""){
      return;
    }
    const logText = `${this.timerValue.actionType} at ${this.timerValue.date} ${this.timerValue.time}`;
    let div = this.renderer.createElement('div');
    this.renderer.addClass(div, 'col-md-12');
    const divText = this.renderer.createText(logText);
    this.renderer.appendChild(div, divText);
    this.renderer.appendChild(this.showLogs.nativeElement, div)
  }

  ngOnInit(): void {}


}
