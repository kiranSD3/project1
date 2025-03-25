import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { AsidebarComponent } from './Asidebar/asidebar/asidebar.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
<<<<<<< HEAD
import { DepartmentComponent } from './Masters/department/department.component';
import { DesignationComponent } from './Masters/designation/designation.component';
import { CategoryComponent } from './Masters/category/category.component';
import { BankmasterComponent } from './Masters/bankmaster/bankmaster.component';
import { LoginComponent } from './Logins/login/login.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './Interceptor/auth.interceptor';
=======
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './Login/login/login.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthInterceptor } from './Interceptors/auth.interceptor';
>>>>>>> 4ca6aa5ee29530b20a84a709bbf3c158b426290c

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AsidebarComponent,
    DashboardComponent,
<<<<<<< HEAD
    DepartmentComponent,
    DesignationComponent,
    CategoryComponent,
    BankmasterComponent,
=======
>>>>>>> 4ca6aa5ee29530b20a84a709bbf3c158b426290c
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    CommonModule,
    FormsModule,
    HttpClientModule,
    JsonPipe
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }

=======
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
>>>>>>> 4ca6aa5ee29530b20a84a709bbf3c158b426290c
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
