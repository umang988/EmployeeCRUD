import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';

@Injectable()
export class EmployeeService {

  public url : string = 'http://localhost:3000/employee';

  constructor(private _http : HttpClient) { }

  getEmployees() : Observable<Employee[]>{
    return this._http.get<Employee[]>(this.url);
  }

  getEmployeeById(id : number) : Observable<Employee>{
    return this._http.get<Employee>(`${this.url}/${id}`)
  }

  addEmployee(data : Employee) : Observable<Employee>{
    return this._http.post<Employee>(this.url,data)
  }

  putEmployee(data : Employee,id : string) : Observable<Employee>{
    return this._http.put<Employee>(`${this.url}/${id}`,data)
  }

  deleteEmployee(id : number) : Observable<Employee>{
    return this._http.delete<Employee>(`${this.url}/${id}`)
  }
}
