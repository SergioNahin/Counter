import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-dis',
  templateUrl: './button-dis.component.html',
  styleUrl: './button-dis.component.css'
})
export class ButtonDisComponent {
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
