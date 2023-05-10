import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduModalComponent } from './edu-modal.component';

describe('EduModalComponent', () => {
  let component: EduModalComponent;
  let fixture: ComponentFixture<EduModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
