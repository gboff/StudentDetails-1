import { Component } from "@angular/core";
import { FeesDetails } from "src/app/FeesDetails";
import { FeesDetailsService } from "src/app/feesDetails-service.service";

@Component({
    selector: 'viewall-feesDetails',
    templateUrl: './viewAllFeesDetails.html',
    styleUrls: ['../../../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})

export class viewAllFeesDetails{
    feesDetailss: FeesDetails[];

    constructor(private feesDetailsService: FeesDetailsService)
    {

    }

    ngOnInit()
    {
        this.feesDetailsService.findAll().subscribe(data=> { this.feesDetailss=data;})
    }
}