import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() oddNumberEvent = new EventEmitter<{n:number}>();
  @Output() evenNumberEvent = new EventEmitter<{n: number}>();
  n: number = 0;
  timer: any;

  constructor() { }


  ngOnInit() {
  }

  start(){
    this.timer = setInterval( () => {
      this.n += 1;
      console.log('point : ' + this.n);
      if(this.n%2 === 0){
        this.evenNumberEvent.emit({
          n: this.n
        })
      }
      else {
        this.oddNumberEvent.emit({
          n: this.n
        })
      }

    },
      1000);
  }

  stop(){
    console.log('stop');
    clearInterval(this.timer);
  }

  onOddNumber(oddNumber: number) {
    console.log("on odd number " + oddNumber);
  }
}
