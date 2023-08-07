import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {Student} from "./Student";

@Injectable({
    providedIn: 'root'
})

export class StudentService
{
    private studentUrl = 'https://shree-student-details-acc4dde4f770.herokuapp.com:8080/insertStudent';

    private allstudentUrl = 'https://shree-student-details-acc4dde4f770.herokuapp.com:8080/showAllStudents';

    constructor(private http:HttpClient)
    {

    }

    public save(student : Student)
    {
        return this.http.post<Student>(this.studentUrl, student);
    }

    public findAll(): Observable<Student[]>{
        return this.http.get<Student[]>(this.allstudentUrl);
    }
}