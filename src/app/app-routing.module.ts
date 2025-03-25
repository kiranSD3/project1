import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { AsidebarComponent } from './Asidebar/asidebar/asidebar.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
<<<<<<< HEAD
import { DepartmentComponent } from './Masters/department/department.component';
import { DesignationComponent } from './Masters/designation/designation.component';
import { CategoryComponent } from './Masters/category/category.component';
import { BankmasterComponent } from './Masters/bankmaster/bankmaster.component';
import { LoginComponent } from './Logins/login/login.component';
=======
import { LoginComponent } from './Login/login/login.component';
>>>>>>> 4ca6aa5ee29530b20a84a709bbf3c158b426290c

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'navbar', component: NavbarComponent
  },
  {
    path: 'asidebar', component: AsidebarComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
<<<<<<< HEAD
    path: 'department', component: DepartmentComponent
  },
  {
    path: 'designation', component: DesignationComponent
  },
  {
    path: 'category', component: CategoryComponent
  },
  {
    path: 'bankmaster', component: BankmasterComponent
  },
  {
=======
>>>>>>> 4ca6aa5ee29530b20a84a709bbf3c158b426290c
    path: 'login', component: LoginComponent
  }






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
