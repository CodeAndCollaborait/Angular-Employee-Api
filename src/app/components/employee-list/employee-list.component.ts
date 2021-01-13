import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../model/employee.model';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: any;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  //Load all employee as list(GET ALL)
  reloadData() {
    this.employees = this.employeeService
      .getEmployeeList()
      .subscribe((data) => {
        this.employees = data;
      });
  }

  //Delete API
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.error(error)
    );
  }

  // route to extract the id number from employee array object
  employeeDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateEmployee(id: number) {
    this.router.navigate(['update', id]);
  }
}
