import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferredViewsComponent } from './deferred-views.component';

describe('DeferredViewsComponent', () => {
  let component: DeferredViewsComponent;
  let fixture: ComponentFixture<DeferredViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeferredViewsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeferredViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
