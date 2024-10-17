import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderDndComponent } from './uploader-dnd.component';

describe('UploaderDndComponent', () => {
  let component: UploaderDndComponent;
  let fixture: ComponentFixture<UploaderDndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploaderDndComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaderDndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
