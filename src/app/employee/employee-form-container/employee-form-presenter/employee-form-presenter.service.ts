import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Employee } from '../../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFormPresenterService {

  private employeeData : Subject<Employee> = new Subject<Employee>();
  public employeeData$ : Observable<Employee>;

  constructor() {
    this.employeeData$ = this.employeeData.asObservable();
   }

  public bindForm(){
    return new FormGroup({
      firstName : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*'),Validators.minLength(2),Validators.maxLength(15)]),
      lastName : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*'),Validators.minLength(2),Validators.maxLength(15)]),
      designation : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      dob : new FormControl('',[Validators.required]),
      address : new FormControl('',[Validators.required, Validators.maxLength(100)]),
      department : new FormControl('',Validators.required),
    })
  }

  public employeeDetails(employeeForm : FormGroup){
    if(employeeForm.invalid){
      console.log("Form is Invalid")
    }
    else{
      this.employeeData.next(employeeForm.value)
    }
  }
}
