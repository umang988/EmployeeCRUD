import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { EmployeeListPresenterService } from '../employee-list-presenter/employee-list-presenter.service';

@Component({
  selector: 'app-employee-list-presentation',
  templateUrl: './employee-list-presentation.component.html',
  styleUrls: ['./employee-list-presentation.component.css'],
  viewProviders: [EmployeeListPresenterService]
})
export class EmployeeListPresentationComponent implements OnInit {

  @Input() public set employeeList(value: Employee[]) {
    if (value) {
      this._employeeList = value
    }
  }

  public get employeeList(): Employee[] {
    return this._employeeList
  }

  @Output() removeEmployee : EventEmitter<Employee> = new EventEmitter();

  private _employeeList : Employee[];

  constructor() { }

  ngOnInit(): void {
  }

  public deleteEmployee(id){
    this.removeEmployee.emit(id);
  }

}
