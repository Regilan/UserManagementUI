import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Employee } from '../model/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8080/api/employee';

  public createNewEmployee(employee: Employee): void {
    this.http.post(this.baseUrl, employee)
    .subscribe(
      data => alert('Employee created!'), 
      error => alert('Some error occurred on creation!')
    );
  }

  public inactivateEmployee(employeeId: number): void {
    this.http.put(this.baseUrl + '/' + employeeId + '/inactivate', null)
    .subscribe(
      data => alert('Employee ' + employeeId + ' is inactivated'), 
      error => alert('Some error occurred on inactivation!')
    );
  }

  public getEmployeeByEmail(emailId: string): Observable<HttpResponse<Employee>> {
    return this.http.get<Employee>(
      this.baseUrl + '/email', {
        params: {
          'email': emailId
        },
        observe: 'response'
      });
  }

}
