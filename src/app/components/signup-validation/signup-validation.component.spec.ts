import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupValidationComponent } from './signup-validation.component';

describe('SignupValidationComponent', () => {
  let component: SignupValidationComponent;
  let fixture: ComponentFixture<SignupValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
