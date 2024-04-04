import { CounterComponent } from "./counter.component"

describe("CounterComponent", () =>{
    it('Valor Inicial del Contador es 0', () => {
        const Counter = new CounterComponent();

        expect(Counter.counter).toBe(0)
    })
})