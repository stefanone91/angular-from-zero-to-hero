import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavypageComponent } from './heavypage.component';

describe('HeavypageComponent', () => {
  let component: HeavypageComponent;
  let fixture: ComponentFixture<HeavypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeavypageComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
