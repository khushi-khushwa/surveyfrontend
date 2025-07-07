import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkcomponentComponent } from './linkcomponent.component';

describe('LinkcomponentComponent', () => {
  let component: LinkcomponentComponent;
  let fixture: ComponentFixture<LinkcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
