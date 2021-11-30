import {Component, OnInit} from '@angular/core';
import {CourseTypescript} from '../../model/course-typescript';
import {OrderByPipe} from '../../pipe/order-by.pipe';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {

  courses: CourseTypescript[];
  searchString: string;

  constructor() {
  }

  ngOnInit(): void {
    this.courses = new OrderByPipe().transform([
      {
        id: '1',
        title: 'Video Course 1. Name First',
        creationDate: Date.now() + 1000 * 60 * 60 * 24 * 15,
        duration: 33,
        description: 'Start Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
        topRelated: true
      },
      {
        id: '2',
        title: 'Video Course 2. Name Second',
        creationDate: Date.now() - 1000 * 60 * 60 * 24 * 15,
        duration: 33,
        description: 'Then Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
        topRelated: true
      },
      {
        id: '3',
        title: 'Video Course 3. Name Third',
        creationDate: Date.now() - 1000 * 60 * 60 * 24 * 2,
        duration: 33,
        description: 'After Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
        topRelated: false
      }
    ], true);
  }

  showMoreCouses(): void {
    console.log('more couses');
  }

  deleteCourseById(courseId: string): void {
    this.courses = this.courses.filter(s => s.id !== courseId);
  }
  identifyCourse(index: number, course: CourseTypescript): string {
    return course.title;
  }
}
