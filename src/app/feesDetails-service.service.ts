import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {FeesDetails} from "./FeesDetails";

@Injectable({
    providedIn: 'root'
})

export class FeesDetailsService
{
    private feesDetailsUrl = 'https://shree-student-details-acc4dde4f770.herokuapp.com:8080/insertFeesDetails';

    private allFeesDetailsUrl = 'https://shree-student-details-acc4dde4f770.herokuapp.com:8080/showAllFeesDetails';

    constructor(private http:HttpClient)
    {

    }

    public save(feesDetails : FeesDetails)
    {
        return this.http.post<FeesDetails>(this.feesDetailsUrl, feesDetails);
    }

    public findAll(): Observable<FeesDetails[]>{
        return this.http.get<FeesDetails[]>(this.allFeesDetailsUrl);
    }
}