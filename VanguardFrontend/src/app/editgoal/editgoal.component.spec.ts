import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditgoalComponent } from './editgoal.component';

describe('EditgoalComponent', () => {
  let component: EditgoalComponent;
  let fixture: ComponentFixture<EditgoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditgoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditgoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
