import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.scss'],
})
export class StudentMarksComponent implements OnInit {
  studentsData: any = [
    {
      id: 2,
      name: 'Name 2',
      class: '3',
      section: 'D',
      sub1: 23,
      sub2: 54,
      sub3: 65,
    },
    {
      id: 1,
      name: 'Name 1',
      class: '3',
      section: 'E',
      sub1: 23,
      sub2: 45,
      sub3: 67,
    },
    {
      id: 3,
      name: 'Name 3',
      class: '3',
      section: 'F',
      sub1: 26,
      sub2: 34,
      sub3: 45,
    },
  ];
  tableHeaders: any = [];
  originalData: any = [];
  count: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.originalData = this.studentsData.map((a: any) => {return {...a}})//structuredClone(this.studentsData)//[...this.studentsData];
    this.tableHeaders = Object.keys(this.studentsData[0]).filter((key) => {
      return key !== 'id';
    });
  }
  /**
   * Sorts table data from a-b, b-a, and then to original data
   */
  sortTable(): void {
    this.count++;
    switch (this.count) {
      case 1: {
        this.studentsData.sort((a: any, b: any) => {
          return a.id - b.id;
        });
        break;
      }
      case 2: {
        this.studentsData.sort((a: any, b: any) => {
          return b.id - a.id;
        });
        break;
      }
      case 3: {
        this.count = 0;
        this.studentsData = [...this.originalData];
        break;
      }
      default: {
        break;
      }
    }
  }
}
