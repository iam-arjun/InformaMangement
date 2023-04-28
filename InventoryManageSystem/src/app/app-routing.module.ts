import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';





import { UserDashComponent } from './user-dash/user-dash.component';
import { MyprofileComponent } from './user-dash/Myprofile/myprofile/myprofile.component';
import { EmpLeaveReqStatusComponent } from './user-dash/EmpLeaveFormPage/emp-leave-req-status/emp-leave-req-status.component';

import { TaskComponent } from './admin-login/admindash/task/task.component';

import { EmployeeLoginTimeComponent } from './admin-login/admindash/employee-login-time/employee-login-time.component';

import { EmpSalarySheetComponent } from './admin-login/admindash/emp-salary-sheet/emp-salary-sheet.component';
import { PartiesInfoComponent } from './admin-login/admindash/parties-info/parties-info.component';
import { EmployeDetailsComponent } from './admin-login/admindash/employe-details/employe-details.component';
import { LeaveFormPageComponent } from './admin-login/admindash/leave-form-page/leave-form-page.component';
import { ContractDetailsComponent } from './admin-login/admindash/contract-details/contract-details.component';
import { SalaryslipComponent } from './admin-login/admindash/salaryslip/salaryslip.component';



const routes: Routes = [
  {
    path:"",component:AdminLoginComponent,
     
    
  },
  {
    path:"userdash",component:UserDashComponent
  },
  {
    path:"addemp",component:PartiesInfoComponent,
  },
  {
    path:"empdetails",component:EmployeDetailsComponent
  },
  {
    path:"leavedetails",component:LeaveFormPageComponent
  },
  {
    path:"myprofile",component:MyprofileComponent
  },
  {
    path:"empleavestatus",component:EmpLeaveReqStatusComponent
  },
  {
    path:"contractupdate",component:ContractDetailsComponent
  },
  {
    path:"task",component:TaskComponent
  },
  {
    path:"attendance",component:EmployeeLoginTimeComponent
  },
  {
    path:"salarysheet",component:EmpSalarySheetComponent
  },
  {
    path:"salaryslip",component:SalaryslipComponent
  },






 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
