import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickerGameComponent } from './clicker.component';

describe('ClickerComponent', () => {
  let component: ClickerGameComponent;
  let fixture: ComponentFixture<ClickerGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClickerGameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClickerGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
