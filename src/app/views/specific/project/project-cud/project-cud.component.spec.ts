import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCudComponent } from './project-cud.component';

describe('ProjectCudComponent', () => {
  let component: ProjectCudComponent;
  let fixture: ComponentFixture<ProjectCudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectCudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
