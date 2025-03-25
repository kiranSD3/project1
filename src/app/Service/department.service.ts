import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { dept_values } from '../Masters/department/department.component';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

private apiUrl = `${environment.apiUrl}/Department`

  constructor(private http:HttpClient) { } 

  getDept(): Observable<dept_values[]> {
return this.http.get<dept_values[]>(`${this.apiUrl}/GetAllDepartments?status=true`)
  }

  addDept(department: any): Observable<any>{
return this.http.post(`${this.apiUrl}/SaveDepartment`, department)
  }

 updateDept(departmentId: number, updatedDept: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/GetDepartmentByDepartmentCode?DepartmentCode=${departmentId}`, updatedDept);
}

  
deleteDept(department: dept_values): Observable<any> {
  return this.http.post(`${this.apiUrl}/SaveDepartment`, {
    departmentCode: department.departmentCode, 
    departmentName: department.departmentName, 
    shortName: department.shortName, 
    deptStatus: false // Deactivating instead of deleting
  });
}





}

  

