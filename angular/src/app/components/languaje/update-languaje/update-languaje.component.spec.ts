import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLanguajeComponent } from './update-languaje.component';

describe('UpdateLanguajeComponent', () => {
  let component: UpdateLanguajeComponent;
  let fixture: ComponentFixture<UpdateLanguajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLanguajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLanguajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
