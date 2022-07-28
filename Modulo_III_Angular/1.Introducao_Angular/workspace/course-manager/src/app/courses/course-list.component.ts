// Este é o arquivo referente à classe lista.

// Sempre declarar o component no modulo que corresponde a ele.
// https://stackoverflow.com/questions/43937387/if-selector-is-an-angular-component-then-verify-that-it-is-part-of-this-mod

import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: "./course-list.component.html"
})
export class CourseListComponent implements OnInit {
    
    filteredCourses: Course[] = [];

    _courses: Course[] = [];

    _filterBy: string;
    constructor(private courseService: CourseService) {}

    ngOnInit(): void {
        this.retrieveAll()
    }

    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses
                this.filteredCourses = this._courses;   
            },
            error: err =>console.log("Error", err)
        });
             
    }

    deleteById(courseId: number): void {
        this.courseService.deleteById(courseId).subscribe({
            next: () => {
                console.log("Successfully deleted!");
                this.retrieveAll();
            },
            error: err => console.log("Error", err)
        })
    }

    set filter(value: string) {
        this._filterBy = value;
        
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
    }

    get filter() {
        return this._filterBy
    }
}