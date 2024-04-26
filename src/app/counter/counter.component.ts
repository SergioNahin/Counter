import { Component } from '@angular/core';

@Component({
  selector: 'app-Counter',
  templateUrl: './counter.component.html',
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent {
  title = 'Contador';
  counter: number = 0;

  handleCount(value: number){

    this.counter = value;
  }
  }
