import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { EmployeDetailsComponent } from './employe-details/employe-details.component';
import { LeaveFormPageComponent } from './leave-form-page/leave-form-page.component';



import { PartiesInfoComponent } from './parties-info/parties-info.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { MyprofileComponent } from './user-dash/Myprofile/myprofile/myprofile.component';
import { EmpLeaveReqStatusComponent } from './user-dash/EmpLeaveFormPage/emp-leave-req-status/emp-leave-req-status.component';
import { ContractDetailsComponent } from './contract-details/contract-details.component';
import { TaskComponent } from './admin-login/admindash/task/task.component';
import { AttendancesheetComponent } from './admin-login/admindash/attendancesheet/attendancesheet.component';
import { ChatOptionsComponent } from './chat-options/chat-options.component';


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
    path:"attendance",component:AttendancesheetComponent
  },
  {
    path:"chat",component:ChatOptionsComponent
  },





 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
