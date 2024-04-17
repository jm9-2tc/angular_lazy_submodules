import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmoduleBComponent } from './submodule-b.component';

describe('SubmoduleBComponent', () => {
  let component: SubmoduleBComponent;
  let fixture: ComponentFixture<SubmoduleBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmoduleBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmoduleBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
