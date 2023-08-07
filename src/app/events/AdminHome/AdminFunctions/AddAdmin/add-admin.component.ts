import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Admin } from "src/app/Admin";
import { AdminService } from "src/app/admin-service.service";

@Component({
    selector: 'add-admin',
    templateUrl : './AddAdmin.html',
    styleUrls : ['../../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})

export class AddAdminComponent{

    admin: Admin;
    show =false;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private adminService: AdminService)
        {
            this.admin = new Admin();
        }

        onSubmitAdmin()
        {
            this.adminService.saveAdmin(this.admin).subscribe(result => this.gotoHome());
        }

        gotoHome()
        {
            this.router.navigate(['admin-home']);
        }
    
}