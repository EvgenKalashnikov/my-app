import {Pipe, PipeTransform} from '@angular/core';
import {CourseTypescript} from '../model/course-typescript';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: CourseTypescript[], desc: boolean): CourseTypescript[] {
    return value.sort((s, s1) => s.creationDate - s1.creationDate * (desc ? -1 : 1));
  }

}
