import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Admin } from "src/app/Admin";
import { AdminService } from "src/app/admin-service.service";

@Component({
    selector:'admin-login',
    templateUrl: './adminLogin.html',
    styleUrls : ['../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})

export class AdminLoginComponent{

    admin: Admin;
    show =false;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private adminService: AdminService)
        {
            this.admin = new Admin();
        }

        onSubmitValidAdmin()
        {
            this.adminService.loginAdmin(this.admin ).subscribe(result => this.gotoHome());
            
                
        }

        gotoHome()
        {
            this.router.navigate(['admin-home']);
        }


}