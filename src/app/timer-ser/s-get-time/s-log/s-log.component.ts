import { Component, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-s-log',
  templateUrl: './s-log.component.html',
  styleUrls: ['./s-log.component.scss'],
})
export class SLogComponent implements OnDestroy {
  timerValue: any;
  @ViewChild('showLogs', { static: false })
  showLogs!: ElementRef;
  subscription: Subscription;
  constructor(private http: HttpService, private renderer: Renderer2) {
    this.subscription = this.http.getData().subscribe((data) =>{
      if(data){
        this.timerValue = data;
        if (this.timerValue.actionType == '') {
          return;
        }
        const logText = `${this.timerValue.actionType} at ${this.timerValue.date} ${this.timerValue.time}`;
        let div = this.renderer.createElement('div');
        this.renderer.addClass(div, 'col-md-12');
        const divText = this.renderer.createText(logText);
        this.renderer.appendChild(div, divText);
        this.renderer.appendChild(this.showLogs.nativeElement, div);
      }
    })
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}
}
