import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoInputComponent } from './photo-input.component';

describe('PhotoInputComponent', () => {
  let component: PhotoInputComponent;
  let fixture: ComponentFixture<PhotoInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
