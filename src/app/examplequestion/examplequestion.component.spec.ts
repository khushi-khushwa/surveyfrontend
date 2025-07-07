import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplequestionComponent } from './examplequestion.component';

describe('ExamplequestionComponent', () => {
  let component: ExamplequestionComponent;
  let fixture: ComponentFixture<ExamplequestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExamplequestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamplequestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
