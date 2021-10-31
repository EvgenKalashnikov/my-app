import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CoursesPageComponent} from './courses-page.component';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesPageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    component.couceses = [
      {
        id: '1',
        title: 'Video Course 1. Name First',
        creationDate: 1635681236640,
        duration: 33,
        description: 'Start Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
      },
      {
        id: '2',
        title: 'Video Course 2. Name Second',
        creationDate: 1635681236640,
        duration: 33,
        description: 'Then Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
      },
      {
        id: '3',
        title: 'Video Course 3. Name Third',
        creationDate: 1635681236640,
        duration: 33,
        description: 'After Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('searchingConsoleResult', () => {
    it('should print to console log third element when it matched', () => {
      component.searchString = 'THIRD';
      const consoleSpy = spyOn(console, 'log');
      component.searchingConsoleResult();
      expect(consoleSpy).toHaveBeenCalledWith([component.couceses[2]]);
    });
    it('should print to console log empty array when not matched', () => {
      component.searchString = 'ABRACADABRANEVERMATH';
      const consoleSpy = spyOn(console, 'log');
      component.searchingConsoleResult();
      expect(consoleSpy).toHaveBeenCalledWith([]);
    });
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
      const expectArrayLength = component.couceses.length;
      component.deleteCourseById('999999999');
      expect(component.couceses.length).toEqual(expectArrayLength);
    });
    it('should delete element with id=2', () => {
      component.couceses = [
        {
          id: '1',
          title: 'Video Course 1. Name First',
          creationDate: 1635681236640,
          duration: 33,
          description: 'Start Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
        },
        {
          id: '2',
          title: 'Video Course 2. Name Second',
          creationDate: 1635681236640,
          duration: 33,
          description: 'Then Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
        },
        {
          id: '3',
          title: 'Video Course 3. Name Third',
          creationDate: 1635681236640,
          duration: 33,
          description: 'After Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
        }
      ];
      const expectedArray = [
        {
          id: '1',
          title: 'Video Course 1. Name First',
          creationDate: 1635681236640,
          duration: 33,
          description: 'Start Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
        },
        {
          id: '3',
          title: 'Video Course 3. Name Third',
          creationDate: 1635681236640,
          duration: 33,
          description: 'After Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
        }
      ];
      component.deleteCourseById('2');
      expect(component.couceses).toEqual(expectedArray);
    });
  });
});
