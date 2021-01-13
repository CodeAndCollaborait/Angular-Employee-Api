import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  submitted: boolean = false;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  /**
   * Only submit new employee if submitted is false and
   * we need to create new employee object;
   */
  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save(): void {
    this.employeeService.createEmployee(this.employee).subscribe((data) => {
      console.log(data);
      this.employee = new Employee();
      this.goToList();
    });
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['/employee']);
  }
}
