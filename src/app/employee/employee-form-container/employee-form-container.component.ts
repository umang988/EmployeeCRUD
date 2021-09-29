import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.component.html',
  styleUrls: ['./employee-form-container.component.css']
})
export class EmployeeFormContainerComponent implements OnInit {

  public editId : string;
  public employeeData$ : Observable<Employee>;

  constructor(private _employeeService : EmployeeService, private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.editId = id;
    if(id){
      this.employeeData$ = this._employeeService.getEmployeeById(+id);
    }
  }

  public employeeAddedData(employeeData){
    this._employeeService.addEmployee(employeeData).subscribe(res => {
      console.log("Employee added Successfully")
    })
    this.router.navigate(['./user']);
  }

  public employeeEditedData(employeeData){
    this._employeeService.putEmployee(employeeData,this.editId).subscribe(res => {
      console.log("Employee edited Successfully")
    })
    this.router.navigate(['./user']);
  }

}
