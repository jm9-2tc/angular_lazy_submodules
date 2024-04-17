import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmoduleAComponent } from './submodule-a.component';

describe('SubmoduleAComponent', () => {
  let component: SubmoduleAComponent;
  let fixture: ComponentFixture<SubmoduleAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmoduleAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmoduleAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
