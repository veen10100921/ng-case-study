import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-ecom-cat',
  templateUrl: './ecom-cat.component.html',
  styleUrls: ['./ecom-cat.component.scss'],
})
export class EcomCatComponent implements OnInit {
  productLists: any = [];
  skeletonLoadArr: number[] = [...Array(12).keys()];
  @ViewChild('tiles', {
    static: true
  }) myTile: ElementRef | undefined
  viewTypeIcon!: HTMLElement;
  constructor(private shopService: HttpService) {}

  /**
   * on init
   */
  ngOnInit(): void {
    this.viewTypeIcon = this.myTile?.nativeElement;
    this.shopService.getShopingList().subscribe((shoppingData) => {
        this.productLists = shoppingData
    });
  }

  /**
   * Toggles grid view layout
   * @param view
   */
  toggleView(view: string):void{
    if(view === "grid"){
      this.viewTypeIcon.style.gridTemplateColumns = 'repeat(4, 1fr)';
    } else{
      this.viewTypeIcon.style.gridTemplateColumns = 'repeat(2, 1fr)';
    }
  }
}
