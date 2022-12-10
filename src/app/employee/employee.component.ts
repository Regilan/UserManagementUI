import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeeForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
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

  onSubmit(): void {
    console.log(this.employeeForm.value);
    this.clearForm();
  }

}
