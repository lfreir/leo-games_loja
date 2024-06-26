import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodappeComponent } from './rodappe.component';

describe('RodappeComponent', () => {
  let component: RodappeComponent;
  let fixture: ComponentFixture<RodappeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodappeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RodappeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
