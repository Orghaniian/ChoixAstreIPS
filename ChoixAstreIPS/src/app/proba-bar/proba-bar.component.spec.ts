import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbaBarComponent } from './proba-bar.component';

describe('ProbaBarComponent', () => {
  let component: ProbaBarComponent;
  let fixture: ComponentFixture<ProbaBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProbaBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProbaBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
