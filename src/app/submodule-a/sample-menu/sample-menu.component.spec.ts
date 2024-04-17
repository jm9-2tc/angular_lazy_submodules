import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleMenuComponent } from './sample-menu.component';

describe('SampleMenuComponent', () => {
  let component: SampleMenuComponent;
  let fixture: ComponentFixture<SampleMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SampleMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SampleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
