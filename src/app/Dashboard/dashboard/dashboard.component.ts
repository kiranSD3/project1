import { Component, OnInit } from '@angular/core';
import { AuthInterceptor } from '../../Interceptor/auth.interceptor';
import { LoginService } from '../../Service/login.service';
import { Token } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

constructor(  private logservice: LoginService, private http: HttpClient) {}

dataList : any[] = [];

ngOnInit(): void {
  // this.getAllData();
}
// getAllData(){
//   this.logservice.onLogin().subscribe((Res:any) => {
// this.dataList = Res.data;
//   });
// }  

}
