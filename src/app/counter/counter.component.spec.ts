import { TestBed } from "@angular/core/testing";
import { AppCounter } from "../app.component";
import { CounterComponent } from "./counter.component"

beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppCounter]
    })
    .compileComponents();
});
    it('Se debe crear el componente HTML', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

describe("CounterComponent", () =>{
    it('Valor Inicial del Contador es 0', () => {
        const Counter = new CounterComponent();

        expect(Counter.counter).toBe(0)
    })
})