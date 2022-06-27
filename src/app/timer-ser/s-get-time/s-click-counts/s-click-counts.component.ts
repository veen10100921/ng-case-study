import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-s-click-counts',
  templateUrl: './s-click-counts.component.html',
  styleUrls: ['./s-click-counts.component.scss']
})
export class SClickCountsComponent {
  startCount: number = 0;
  pauseCount: number = 0;
  constructor( private http: HttpService) {
    http.getData().subscribe(res => {
      if(res){
        this.startCount = res.startCount;
        this.pauseCount = res.pauseCount;
      }
    })
  }

}
