import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayresComponent } from './playres.component';

describe('PlayresComponent', () => {
  let component: PlayresComponent;
  let fixture: ComponentFixture<PlayresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
