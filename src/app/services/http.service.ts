import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private url = 'https://fakestoreapi.com/products';
  timerObject = new Subject<any>();
  countDownTimer = new Subject<any>();
  timerData = this.timerObject.asObservable();
  countDownData = this.countDownTimer.asObservable();
  constructor(private http: HttpClient) {
    this.timerObject.subscribe((value) => {
      console.log('Service constructor: ', value);
    });
  }
  public getShopingList() {
    return this.http.get(this.url);
  }

  shareData(data: {}) {
    console.log('Data: ', data);
    this.timerObject.next(data);
  }

  countDownDataFn(data: number) {
    this.countDownTimer.next(data);
  }

  getCountDown(){
    return this.countDownTimer.asObservable();
  }

  getData() {
    return this.timerObject.asObservable();
  }
}
