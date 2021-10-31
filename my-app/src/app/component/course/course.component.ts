import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CourseTypescript} from '../../model/course-typescript';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input()
  cource: CourseTypescript;
  @Output()
  deleteOne = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteCourse(courseId: string): void {
    this.deleteOne.emit(courseId);
  }

}
