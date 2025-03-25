import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { desigvalues } from '../Masters/designation/designation.component';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  constructor(private http: HttpClient) { }

  private apiUrl = `${environment.apiUrl}/Designation`

  getDesignation(): Observable<desigvalues[]>{
        return this.http.get<desigvalues[]>(`${this.apiUrl}/GetDesignations?status=true`)
  }

  addDesignation(designation: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/SaveDesignation`, designation)
  }
}
