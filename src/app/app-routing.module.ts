import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './events/AdminLogin/admin-login.component';
import { AddAdminComponent } from './events/AdminHome/AdminFunctions/AddAdmin/add-admin.component';
import { AdminHomeComponent } from './events/AdminHome/admin-home.component';
import { NavBarComponent } from './events/NavBar/nav-bar.component';
import { AddStudentComponent } from './events/AdminHome/AdminFunctions/AddStudent/add-student.component';
import { viewAllStudents } from './events/AdminHome/AdminFunctions/ViewStudents/viewall-students.component';
import { AddFeesDetailsComponent } from './events/AdminHome/AdminFunctions/AddFeesDetails/add-feesDetails.component';
import { viewAllFeesDetails } from './events/AdminHome/AdminFunctions/ViewFeesDetails/viewall-feesDetails.component';

const routes: Routes = [

  {path: 'nav-bar', component:NavBarComponent},
  {path: 'admin-login', component:AdminLoginComponent},
  {path: 'admin-home', component: AdminHomeComponent},
  {path: 'add-admin', component: AddAdminComponent},
  {path: 'add-student', component: AddStudentComponent},
  {path: 'viewall-students', component: viewAllStudents},
  {path: 'add-feesDetails', component: AddFeesDetailsComponent},
  {path: 'viewall-feesDetails', component: viewAllFeesDetails}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
