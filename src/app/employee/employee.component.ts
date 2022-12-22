import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from './model/Employee';
import { EmployeeService } from './service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeeForm!: FormGroup;
  email!: string;
  employee!: any;

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.clearForm();
  }

  clearForm(): void {
    this.employeeForm = this.formBuilder.group({
      employeeId: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl(''),
      emailId: new FormControl('', [Validators.required]),
      userRole: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required])
    });
  }

  public async getEmployeeByEmail(emailId: string) {
    await this.employeeService.getEmployeeByEmail(emailId).subscribe(
      val => {
        this.employee = val.body;
      }
    );   
  }

  onSubmit(): void {
    this.employeeService.createNewEmployee(this.employeeForm.value);
    this.clearForm();
  }

  inactivate(employeeId: number): void {
    this.employeeService.inactivateEmployee(employeeId);
  }

}
