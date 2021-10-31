import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CourseTypescript} from '../../model/course-typescript';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input()
  course: CourseTypescript;
  @Output()
  deleteOne = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteCourse(courseId: string): void {
    this.deleteOne.emit(courseId);
  }

  isOutdate(createdDate: number): string {
    if (createdDate < Date.now() && createdDate >= Date.now() - 1000 * 60 * 60 * 24 * 14) {
      return 'border border-success';
    } else if (createdDate > Date.now()) {
      return 'border border-info';
    } else {
      return '';
    }
  }
}
