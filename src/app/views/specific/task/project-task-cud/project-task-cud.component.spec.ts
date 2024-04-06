import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTaskCudComponent } from './project-task-cud.component';

describe('ProjectTaskCudComponent', () => {
  let component: ProjectTaskCudComponent;
  let fixture: ComponentFixture<ProjectTaskCudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTaskCudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectTaskCudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
