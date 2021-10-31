import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseComponent} from './course.component';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.course = {
      id: '1',
      title: 'Video Course 1. Name First',
      creationDate: 1635681236640,
      duration: 33,
      description: 'Start Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
      ,
      topRelated: true
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('deleteCourse', () => {
    it('should call deleteOne event emit', () => {
      const deleteOneEmitSpy = spyOn(component.deleteOne, 'emit');
      component.deleteCourse('1');
      expect(deleteOneEmitSpy).toHaveBeenCalled();
    });
  });
});
