import { Component } from '@angular/core';

@Component({
  selector: 'app-Counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  title = 'Contador';
  counter: number = 0;

  add() {
    this.counter++;
  }
  less() {
    if (this.counter != 0) {
      this.counter--;
    }
  }
}