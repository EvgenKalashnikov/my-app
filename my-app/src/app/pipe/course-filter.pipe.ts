import {Pipe, PipeTransform} from '@angular/core';
import {CourseTypescript} from '../model/course-typescript';

@Pipe({
  name: 'curseFilter'
})
export class CourseFilterPipe implements PipeTransform {

  transform(courses: CourseTypescript[], searchString: string): CourseTypescript[] {
    return !searchString || !courses
      ? courses
      : courses.filter(s => s.title.toLowerCase().includes(searchString.toLowerCase())
        || s.description.toLowerCase().includes(searchString.toLowerCase()));
  }

}
