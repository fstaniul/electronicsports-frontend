import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithErrorsComponent } from './input-with-errors.component';

describe('InputWithErrorsComponent', () => {
  let component: InputWithErrorsComponent;
  let fixture: ComponentFixture<InputWithErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputWithErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
