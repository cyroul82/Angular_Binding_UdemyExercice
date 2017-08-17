import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() oddNumberEvent = new EventEmitter<{num:number}>();
  @Output() evenNumberEvent = new EventEmitter<{num: number}>();
  n: number = 0;
  timer: any;

  constructor() { }


  ngOnInit() {
  }

  start(){
    this.timer = setInterval( () => {
      this.n += 1;
      if(this.n%2 === 0){
        this.evenNumberEvent.emit({
          num: this.n
        })
      }
      else {
        this.oddNumberEvent.emit({
          num: this.n
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
