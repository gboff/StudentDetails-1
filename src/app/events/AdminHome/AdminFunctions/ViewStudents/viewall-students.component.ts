import { Component } from "@angular/core";
import { Student } from "src/app/Student";
import { StudentService } from "src/app/student-service.service";

@Component({
    selector: 'viewall-students',
    templateUrl: './viewAllStudents.html',
    styleUrls: ['../../../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})

export class viewAllStudents{
    students: Student[];

    constructor(private studentService: StudentService)
    {

    }

    ngOnInit()
    {
        this.studentService.findAll().subscribe(data=> { this.students=data;})
    }
}