import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "vz bz";
  even: number[] = [];
  odd: number[] = [];

  onEvenNumber(data: {num: number}){
    this.even.push(data.num);
    console.log("even :" + data.num);
  }

  onOddNumber(data: {num: number}) {
    this.odd.push(data.num);
    console.log("odd : " + data.num);
  }


}
