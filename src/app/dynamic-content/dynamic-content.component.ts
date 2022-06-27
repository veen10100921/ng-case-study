import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.scss'],
})
export class DynamicContentComponent implements OnInit {
  @ViewChild('tiles', { static: true }) myTile!: ElementRef;
  divArray = [...Array(10).keys()];
  scrolly: number = 0;
  previousScrollPos: number = 0;
  DEFAULT_BOTTOM_VALUE = 150;
  constructor(private renderer: Renderer2) {
    console.log(this.divArray);
  }

  ngOnInit() {
    fromEvent(this.myTile.nativeElement, 'scroll').subscribe(
      (e: any) => {
        this.previousScrollPos = this.scrolly;
        this.scrolly = e.target['scrollTop'];
      }
    );
  }

  /**
   * Detect height of the container while scrolling for appending new div
   */
  public onscroll = (ev: Event) => {
    const windowInnerHeight = this.myTile.nativeElement.getBoundingClientRect().height;
    const bodyHeight = document.body.offsetHeight;
    if (windowInnerHeight + this.scrolly >= (bodyHeight - windowInnerHeight) - this.DEFAULT_BOTTOM_VALUE && this.scrolly > this.previousScrollPos) {
      this.divArray.length++;
    }
  };

  /**
   * Shows div id in alert
   * @param id
   */
  public showDivId(id: number): void {
    alert('Div Id is: ' + id);
  }
}
