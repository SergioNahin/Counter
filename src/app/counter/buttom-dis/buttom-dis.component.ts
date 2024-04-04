import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttom-dis',
  templateUrl: './buttom-dis.component.html',
  styleUrl: './buttom-dis.component.css'
})
export class ButtomDisComponent {
  @Input()
  contador: number = 0;
  @Output()
  onLess: EventEmitter<number> = new EventEmitter();

  less(){
    if(this.contador != 0)
      this.contador--;
      this.onLess.emit(this.contador);   

  }

}
