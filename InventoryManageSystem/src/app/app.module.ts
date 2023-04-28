import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';
import { MyserviceService } from './Services/myservice.service';
import {MatSelectModule} from '@angular/material/select';

import { FilterpipePipe } from './filterpipe.pipe';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import {MatRadioModule} from '@angular/material/radio';
import { LeaveFormComponent } from './user-dash/leave-form/leave-form.component';
import { AdmindashComponent } from './admin-login/admindash/admindash.component';
import { EmpReqPopComponent } from './admin-login/admindash/emp-req-pop/emp-req-pop.component';
import {MatCardModule} from '@angular/material/card';

import { MyprofileComponent } from './user-dash/Myprofile/myprofile/myprofile.component';
import { EmpLeaveReqStatusComponent } from './user-dash/EmpLeaveFormPage/emp-leave-req-status/emp-leave-req-status.component';
import { Filterpipe2Pipe } from './filterpipe2.pipe';

import { Filterpipe3Pipe } from './filterpipe3.pipe';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TaskComponent } from './admin-login/admindash/task/task.component';
import { Filterpipe4Pipe } from './filterpipe4.pipe';


import { EmailserviceService } from './Services/emailservice.service';
import { EmployeeLoginTimeComponent } from './admin-login/admindash/employee-login-time/employee-login-time.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EmpSalarySheetComponent } from './admin-login/admindash/emp-salary-sheet/emp-salary-sheet.component';
import { PartiesInfoComponent } from './admin-login/admindash/parties-info/parties-info.component';
import { EmployeDetailsComponent } from './admin-login/admindash/employe-details/employe-details.component';
import { PopupformComponent } from './admin-login/admindash/parties-info/popupform/popupform.component';
import { CVcompComponent } from './admin-login/admindash/employe-details/cvcomp/cvcomp.component';
import { LeaveFormPageComponent } from './admin-login/admindash/leave-form-page/leave-form-page.component';
import { ContractDetailsComponent } from './admin-login/admindash/contract-details/contract-details.component';
import { CurrentTimeComponent } from './admin-login/admindash/current-time/current-time.component';

import { SalarysheetComponent } from './admin-login/admindash/employe-details/salarysheet/salarysheet.component';
import { Filterpipe5Pipe } from './filterpipe5.pipe';
import { ShowsignupadminComponent } from './admin-login/admindash/showsignupadmin/showsignupadmin.component';
import { SalaryslipComponent } from './admin-login/admindash/salaryslip/salaryslip.component';
import { Filterpipe6Pipe } from './filterpipe6.pipe';
import { Filterpipe7Pipe } from './filterpipe7.pipe';
import { ForgotPassComponent } from './admin-login/forgot-pass/forgot-pass.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    AppComponent,
    PartiesInfoComponent,

 
    EmployeDetailsComponent,
    FilterpipePipe,
    PopupformComponent,
    CVcompComponent,
    AdminLoginComponent,
    UserDashComponent,
    LeaveFormComponent,
    AdmindashComponent,
    EmpReqPopComponent,
    LeaveFormPageComponent,
    MyprofileComponent,
    EmpLeaveReqStatusComponent,
    Filterpipe2Pipe,
    ContractDetailsComponent,
    Filterpipe3Pipe,
    TaskComponent,
    Filterpipe4Pipe,
    CurrentTimeComponent,

  
    EmployeeLoginTimeComponent,
    SalarysheetComponent,
    EmpSalarySheetComponent,
    Filterpipe5Pipe,
    ShowsignupadminComponent,
    SalaryslipComponent,
    Filterpipe6Pipe,
    Filterpipe7Pipe,
    ForgotPassComponent,


   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatRadioModule,
    MatCardModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatProgressSpinnerModule

    
   
  ],
  providers: [MyserviceService,MatDialog,EmailserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
