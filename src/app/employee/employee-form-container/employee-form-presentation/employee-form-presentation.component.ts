import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../../model/employee.model';
import { EmployeeFormPresenterService } from '../employee-form-presenter/employee-form-presenter.service';

@Component({
  selector: 'app-employee-form-presentation',
  templateUrl: './employee-form-presentation.component.html',
  styleUrls: ['./employee-form-presentation.component.css'],
  viewProviders: [ EmployeeFormPresenterService ]
})
export class EmployeeFormPresentationComponent implements OnInit {

  @Input() public set employeeData(value : Employee){
    if(value){
      this._employee = value;
      this.setEmployeeDetails(value);
      this.isEditable = true;
    }
  }

  public get employeeData(): Employee {
    console.log('Getter' + this._employee);
    return this._employee;
  }

  @Output() employeeAddedData : EventEmitter<FormGroup> = new EventEmitter();

  @Output() employeeEditedData : EventEmitter<FormGroup> = new EventEmitter();

  public employeeForm : FormGroup;
  public isEditable : boolean = false;

  public designations = [
    'Product Manager','Chief Architect','Software Architect','Senior Software Developer','Junior Software Developer','Intern Software Developer'
  ]

  public departments = [
    'Accounts and Finance','HR','Sales and marketing', 'QA' , 'Research and development', 'DevOps'
  ]

  private _employee : Employee;

  constructor(private _employeeFormPresenterService : EmployeeFormPresenterService, private _route: Router) {
    this.employeeForm = this._employeeFormPresenterService.bindForm()
   }

  ngOnInit(): void {
    this._employeeFormPresenterService.employeeData$.subscribe((employeeData : any) => {
      if(this.isEditable === false){
        this.employeeAddedData.emit(employeeData);
      }
      else{
        this.employeeEditedData.emit(employeeData)
      }
    })
  }

  public onSubmit(){
    this._employeeFormPresenterService.employeeDetails(this.employeeForm)
    this._route.navigate(['../employee'])
  }

  public clearForm(){
    this.employeeForm.reset();
  }

  public setEmployeeDetails(value){
    this.employeeForm.reset(value);
  }

  get employeeFormControl() {
    return this.employeeForm.controls;
  }

}
