import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './events/AdminLogin/admin-login.component';
import { AdminService } from './admin-service.service';
import { AddAdminComponent } from './events/AdminHome/AdminFunctions/AddAdmin/add-admin.component';
import { AdminHomeComponent } from './events/AdminHome/admin-home.component';
import { NavBarComponent } from './events/NavBar/nav-bar.component';
import { AddStudentComponent } from './events/AdminHome/AdminFunctions/AddStudent/add-student.component';
import { viewAllStudents } from './events/AdminHome/AdminFunctions/ViewStudents/viewall-students.component';
import { AddFeesDetailsComponent } from './events/AdminHome/AdminFunctions/AddFeesDetails/add-feesDetails.component';
import { viewAllFeesDetails } from './events/AdminHome/AdminFunctions/ViewFeesDetails/viewall-feesDetails.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AddAdminComponent,
    AddStudentComponent,
    viewAllStudents,
    AddFeesDetailsComponent,
    viewAllFeesDetails
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
