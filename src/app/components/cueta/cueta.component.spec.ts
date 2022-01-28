import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuetaComponent } from './cueta.component';

describe('CuetaComponent', () => {
  let component: CuetaComponent;
  let fixture: ComponentFixture<CuetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
