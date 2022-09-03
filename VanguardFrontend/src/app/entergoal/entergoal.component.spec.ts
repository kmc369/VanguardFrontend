import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntergoalComponent } from './entergoal.component';

describe('EntergoalComponent', () => {
  let component: EntergoalComponent;
  let fixture: ComponentFixture<EntergoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntergoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntergoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
