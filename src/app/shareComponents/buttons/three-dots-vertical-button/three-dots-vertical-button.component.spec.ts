import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDotsVerticalButtonComponent } from './three-dots-vertical-button.component';

describe('ThreeDotsVerticalButtonComponent', () => {
  let component: ThreeDotsVerticalButtonComponent;
  let fixture: ComponentFixture<ThreeDotsVerticalButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeDotsVerticalButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreeDotsVerticalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
