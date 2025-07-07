import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewFreetextComponent } from './preview-freetext.component';

describe('PreviewFreetextComponent', () => {
  let component: PreviewFreetextComponent;
  let fixture: ComponentFixture<PreviewFreetextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviewFreetextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviewFreetextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
