import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { LessonDetail } from "../model/lesson-detail";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { CoursesService } from "./courses.service";

@Injectable()
export class LessonsDetailResolver implements Resolve<LessonDetail> {
  constructor(private courses: CoursesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<LessonDetail> {
    const courseUrl = route.parent.paramMap.get("courseUrl"),
      lessonSeqNo = route.paramMap.get("lessonSeqNo");

    return this.courses.loadLessonDetail(courseUrl, lessonSeqNo);
  }
}
