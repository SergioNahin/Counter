import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomDisComponent } from './button-dis.component';

describe('ButtomDisComponent', () => {
  let component: ButtomDisComponent;
  let fixture: ComponentFixture<ButtomDisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtomDisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtomDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
