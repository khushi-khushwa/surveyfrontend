import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewNumericComponent } from './preview-numeric.component';

describe('PreviewNumericComponent', () => {
  let component: PreviewNumericComponent;
  let fixture: ComponentFixture<PreviewNumericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviewNumericComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviewNumericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
