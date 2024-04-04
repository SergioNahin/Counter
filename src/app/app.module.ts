import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/counter.module';
import { AppCounter } from './app.component';

@NgModule({
  declarations: [AppCounter],
  imports: [
    BrowserModule,
    CounterModule    
  ],
  providers: [],
  bootstrap: [AppCounter]
})
export class AppModule { }
