import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarpuntosComponent } from './asignarpuntos.component';

describe('AsignarpuntosComponent', () => {
  let component: AsignarpuntosComponent;
  let fixture: ComponentFixture<AsignarpuntosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarpuntosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarpuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
