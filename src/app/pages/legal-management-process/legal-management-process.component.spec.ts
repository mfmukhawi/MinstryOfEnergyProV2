import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalManagementProcessComponent } from './legal-management-process.component';

describe('LegalManagementProcessComponent', () => {
  let component: LegalManagementProcessComponent;
  let fixture: ComponentFixture<LegalManagementProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalManagementProcessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegalManagementProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
