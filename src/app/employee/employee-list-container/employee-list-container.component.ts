import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list-container',
  templateUrl: './employee-list-container.component.html',
  styleUrls: ['./employee-list-container.component.css']
})
export class EmployeeListContainerComponent implements OnInit {

  public employeeList$ : Observable<Employee[]> 

  constructor(private _employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.employeeList$ = this._employeeService.getEmployees();
  }

  public deleteEmployee(id) {
    if(confirm('Are you sure ?')){
      this._employeeService.deleteEmployee(id).subscribe(res => {
        console.log("Employee Deleted Successfully");
      })
    }
  }

}
