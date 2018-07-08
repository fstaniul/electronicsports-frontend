import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustRouterComponent } from './just-router.component';

describe('JustRouterComponent', () => {
  let component: JustRouterComponent;
  let fixture: ComponentFixture<JustRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
