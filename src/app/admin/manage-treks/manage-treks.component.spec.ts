import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTreksComponent } from './manage-treks.component';

describe('ManageTreksComponent', () => {
  let component: ManageTreksComponent;
  let fixture: ComponentFixture<ManageTreksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTreksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTreksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
