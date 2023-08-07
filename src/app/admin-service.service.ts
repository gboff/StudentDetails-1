import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Admin } from "./Admin";

@Injectable({
    providedIn: 'root'
})

export class AdminService
{
    private CreateAdminurl = 'https://shree-student-details-acc4dde4f770.herokuapp.com:8080/registerAdmin';

    private loginAdminurl= 'https://shree-student-details-acc4dde4f770.herokuapp.com:8080/validateAdmin';

    constructor(private http:HttpClient)
    {

    }

    public saveAdmin(admin: Admin)
    {
        return this.http.post<Admin>(this.CreateAdminurl, admin);
    }

    public loginAdmin(admin :Admin)
    {
        return this.http.post<Admin>(this.loginAdminurl,admin);
    }
}