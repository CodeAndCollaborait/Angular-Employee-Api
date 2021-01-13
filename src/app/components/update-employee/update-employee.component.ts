import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  id: number;
  employee: Employee;
  submitted: false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.id).subscribe(
      (data) => {
        console.log(data);
        this.employee = data;
      },
      (error) => console.error(error)
    );
  }

  updateEmployee(): void {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      (data) => {
        console.log(data);
        this.employee = new Employee();
        this.goToList();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onSubmit() {
    this.updateEmployee();
  }

  goToList() {
    this.router.navigate(['/employee']);
  }
}
