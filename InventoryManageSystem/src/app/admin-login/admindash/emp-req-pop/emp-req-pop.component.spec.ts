import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpReqPopComponent } from './emp-req-pop.component';

describe('EmpReqPopComponent', () => {
  let component: EmpReqPopComponent;
  let fixture: ComponentFixture<EmpReqPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpReqPopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpReqPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
