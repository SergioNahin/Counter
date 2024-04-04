import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppCounter } from './app.component';
import { AppModule } from './app.module';
import { CounterModule } from './counter/counter.module';

describe('App-Counter', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppModule,
        CounterModule
      ],
      declarations: [
        
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppCounter);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Counter'`, () => {
    const fixture = TestBed.createComponent(AppCounter);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Counter');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppCounter);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Contador: ');
  });
});
