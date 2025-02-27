import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { AsidebarComponent } from './Asidebar/asidebar/asidebar.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { LoginComponent } from './Login/login/login.component';

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
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
