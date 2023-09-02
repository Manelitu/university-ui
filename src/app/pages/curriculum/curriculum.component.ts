import { Component, OnInit } from '@angular/core';
import { Courses, CoursesService } from '../courses/courses.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {
  public courses!: Courses[];

  constructor(private courseService: CoursesService) {}

  ngOnInit(): void {
    this.courseService.listCourses().subscribe(
      (resp) => this.courses = resp
    );
  }

}
