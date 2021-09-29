import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormContainerComponent } from './employee-form-container/employee-form-container.component';
import { EmployeeListContainerComponent } from './employee-list-container/employee-list-container.component';

const routes: Routes = [
  { path: '', redirectTo: 'employeeList'},
  { path: 'employeeList', component: EmployeeListContainerComponent},
  { path: 'employeeAdd', component: EmployeeFormContainerComponent},
  { path: 'employeeEdit/:id', component: EmployeeFormContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
