import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { CounterComponent } from "./counter.component";
import { ButtonAddComponent } from "./button-add/button-add.component";
import { ButtomDisComponent } from "./buttom-dis/buttom-dis.component";


@NgModule({
    declarations: [CounterComponent, ButtonAddComponent, ButtomDisComponent],
    imports: [CommonModule],
    exports: [CounterComponent]
})
export class CounterModule{

}