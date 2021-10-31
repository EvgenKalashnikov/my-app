import {Component, OnInit} from '@angular/core';
import {CourseTypescript} from '../../model/course-typescript';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {

  couceses: CourseTypescript[];
  searchString: string;

  constructor() {
  }

  ngOnInit(): void {
    this.couceses = [
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
  }

  searchingConsoleResult(): void {
    console.log(this.couceses.filter(s => s.title.toLowerCase().includes(this.searchString.toLowerCase())
      || s.description.toLowerCase().includes(this.searchString.toLowerCase())));
  }

  showMoreCouses(): void {
    console.log('more couses');
  }

  deleteCourseById(courseId: string): void {
    this.couceses = this.couceses.filter(s => s.id !== courseId);
  }
}
