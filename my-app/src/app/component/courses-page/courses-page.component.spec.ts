import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CoursesPageComponent} from './courses-page.component';
import {CourseFilterPipe} from '../../pipe/course-filter.pipe';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesPageComponent, CourseFilterPipe],
      providers: [{provide: CourseFilterPipe, useValue: new CourseFilterPipe()}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    component.courses = [
      {
        id: '1',
        title: 'Video Course 1. Name First',
        creationDate: 1635681236640,
        duration: 33,
        description: 'Start Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
        topRelated: true
      },
      {
        id: '2',
        title: 'Video Course 2. Name Second',
        creationDate: 1635681236640,
        duration: 33,
        description: 'Then Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
        topRelated: true
      },
      {
        id: '3',
        title: 'Video Course 3. Name Third',
        creationDate: 1635681236640,
        duration: 33,
        description: 'After Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
        topRelated: true
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('showMoreCouses', () => {
    it('should print to console static text', () => {
      const consoleSpy = spyOn(console, 'log');
      component.showMoreCouses();
      expect(consoleSpy).toHaveBeenCalled();
    });
  });
  describe('deleteCourseById', () => {
    it('should delete nothing when id not match', () => {
      const expectArrayLength = component.courses.length;
      component.deleteCourseById('999999999');
      expect(component.courses.length).toEqual(expectArrayLength);
    });
    it('should delete element with id=2', () => {
      component.courses = [
        {
          id: '1',
          title: 'Video Course 1. Name First',
          creationDate: 1635681236640,
          duration: 33,
          description: 'Start Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
          topRelated: true
        },
        {
          id: '2',
          title: 'Video Course 2. Name Second',
          creationDate: 1635681236640,
          duration: 33,
          description: 'Then Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
          topRelated: true
        },
        {
          id: '3',
          title: 'Video Course 3. Name Third',
          creationDate: 1635681236640,
          duration: 33,
          description: 'After Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
          topRelated: true
        }
      ];
      const expectedArray = [
        {
          id: '1',
          title: 'Video Course 1. Name First',
          creationDate: 1635681236640,
          duration: 33,
          description: 'Start Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
          topRelated: true
        },
        {
          id: '3',
          title: 'Video Course 3. Name Third',
          creationDate: 1635681236640,
          duration: 33,
          description: 'After Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
          topRelated: true
        }
      ];
      component.deleteCourseById('2');
      expect(component.courses).toEqual(expectedArray);
    });
  });
});
