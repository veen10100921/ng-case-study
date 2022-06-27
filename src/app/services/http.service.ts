import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private url = 'https://fakestoreapi.com/products';
  timerObject = new Subject<any>();
  countDownTimer = new Subject<any>();
  timerData = this.timerObject.asObservable();
  countDownData = this.countDownTimer.asObservable();
  responseCache = new Map();

  constructor(private http: HttpClient) {
    this.timerObject.subscribe((value) => {
      console.log('Service constructor: ', value);
    });
  }
  /**
   * Gets shoping list with api caching
   * @returns shoping list
   */
  getShopingList(): Observable<any> {
    const shoppingDataFromCache = this.responseCache.get(this.url);
    if (shoppingDataFromCache) {
      return of(shoppingDataFromCache);
    }
    const response = this.http.get<any>(this.url);
    response.subscribe(shopData => this.responseCache.set(this.url, shopData));
    return response;
  }

  /**
   * Shares data to other components
   * @param data
   */
  shareData(data: {}) {
    this.timerObject.next(data);
  }

  /**
   * Coundown timer fn
   * @param data
   */
  countDownDataFn(data: number) {
    this.countDownTimer.next(data);
  }

  /**
   * Gets count down
   * @returns
   */
  getCountDown(){
    return this.countDownTimer.asObservable();
  }

  /**
   * Gets timer data
   * @returns
   */
  getData() {
    return this.timerObject.asObservable();
  }
}
