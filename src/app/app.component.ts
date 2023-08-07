import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './admin-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentDetails';


  constructor(private router: Router, private adminService: AdminService)
  {

  }


}
