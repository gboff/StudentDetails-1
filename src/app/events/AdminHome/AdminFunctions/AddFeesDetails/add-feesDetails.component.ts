import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FeesDetails } from "src/app/FeesDetails";
import { FeesDetailsService } from "src/app/feesDetails-service.service";


@Component({
    selector: 'add-feesDetails',
    templateUrl : './AddFeesDetails.html',
    styleUrls : ['../../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})

export class AddFeesDetailsComponent{

    feesDetails: FeesDetails;
    show =false;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private feesDetailsService: FeesDetailsService)
        {
            this.feesDetails = new FeesDetails();
        }

        onSubmitFeesDetails()
        {
            this.feesDetailsService.save(this.feesDetails).subscribe(result => this.gotoHome());
        }

        gotoHome()
        {
            this.router.navigate(['admin-home']);
        }
    
}