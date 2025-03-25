import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { AsidebarComponent } from './Asidebar/asidebar/asidebar.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { DepartmentComponent } from './Masters/department/department.component';
import { DesignationComponent } from './Masters/designation/designation.component';
import { CategoryComponent } from './Masters/category/category.component';
import { BankmasterComponent } from './Masters/bankmaster/bankmaster.component';
import { LoginComponent } from './Logins/login/login.component';

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
    path: 'login', component: LoginComponent
  }






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
