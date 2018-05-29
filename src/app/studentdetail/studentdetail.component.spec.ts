import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdetailComponent } from './studentdetail.component';

describe('StudentdetailComponent', () => {
  let component: StudentdetailComponent;
  let fixture: ComponentFixture<StudentdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
