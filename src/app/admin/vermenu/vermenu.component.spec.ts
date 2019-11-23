import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VermenuComponent } from './vermenu.component';

describe('VermenuComponent', () => {
  let component: VermenuComponent;
  let fixture: ComponentFixture<VermenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VermenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
