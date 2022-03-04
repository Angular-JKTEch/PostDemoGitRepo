import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-next-example',
  templateUrl: './next-example.component.html',
  styleUrls: ['./next-example.component.css'],
})
export class NextExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const sqnc = new Observable(countOnetoTen); // creating a new observable

    sqnc.subscribe({
      next(num) {
        console.log(num);
      },
    });
    // this function runs when subscriber is called
    function countOnetoTen(observer: any) {
      for (var i = 1; i <= 10; i++) {
        //calls the next observable
        //notification
        observer.next(i);
      }

      return { unsubscribe() {} };
    }
  }
}
