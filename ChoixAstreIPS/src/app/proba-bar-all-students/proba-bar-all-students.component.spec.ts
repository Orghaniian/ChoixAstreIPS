import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbaBarAllStudentsComponent } from './proba-bar-all-students.component';

describe('ProbaBarAllStudentsComponent', () => {
  let component: ProbaBarAllStudentsComponent;
  let fixture: ComponentFixture<ProbaBarAllStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProbaBarAllStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProbaBarAllStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
