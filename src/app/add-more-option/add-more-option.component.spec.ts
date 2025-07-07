import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoreOptionComponent } from './add-more-option.component';

describe('AddMoreOptionComponent', () => {
  let component: AddMoreOptionComponent;
  let fixture: ComponentFixture<AddMoreOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMoreOptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMoreOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
