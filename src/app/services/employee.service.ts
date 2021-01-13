import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl: string = 'http://localhost:8080/abc.com/employees/';
  constructor(private http: HttpClient) {}

  //GET
  getEmployeeList(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
  //GET/id

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  //POST
  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.apiUrl}`, employee);
  }
  //PUT
  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}`, value);
  }
  //DELETE
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }
}
