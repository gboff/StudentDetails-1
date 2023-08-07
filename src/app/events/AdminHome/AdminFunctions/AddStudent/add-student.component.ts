import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Student } from "src/app/Student";
import { StudentService } from "src/app/student-service.service";


@Component({
    selector: 'add-student',
    templateUrl : './AddStudent.html',
    styleUrls : ['../../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})

export class AddStudentComponent{

    student: Student;
    show =false;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private studentService: StudentService)
        {
            this.student = new Student();
        }

        onSubmitStudent()
        {
            this.studentService.save(this.student).subscribe(result => this.gotoHome());
        }

        gotoHome()
        {
            this.router.navigate(['admin-home']);
        }
    
}