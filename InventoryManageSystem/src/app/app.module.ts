import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PartiesInfoComponent } from './parties-info/parties-info.component';
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
import { EmployeDetailsComponent } from './employe-details/employe-details.component';
import { FilterpipePipe } from './filterpipe.pipe';
import { PopupformComponent } from './parties-info/popupform/popupform.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { CVcompComponent } from './employe-details/cvcomp/cvcomp.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import {MatRadioModule} from '@angular/material/radio';
import { LeaveFormComponent } from './user-dash/leave-form/leave-form.component';
import { AdmindashComponent } from './admin-login/admindash/admindash.component';
import { EmpReqPopComponent } from './admin-login/admindash/emp-req-pop/emp-req-pop.component';
import {MatCardModule} from '@angular/material/card';
import { LeaveFormPageComponent } from './leave-form-page/leave-form-page.component';
import { MyprofileComponent } from './user-dash/Myprofile/myprofile/myprofile.component';
import { EmpLeaveReqStatusComponent } from './user-dash/EmpLeaveFormPage/emp-leave-req-status/emp-leave-req-status.component';
import { Filterpipe2Pipe } from './filterpipe2.pipe';
import { ContractDetailsComponent } from './contract-details/contract-details.component';
import { Filterpipe3Pipe } from './filterpipe3.pipe';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TaskComponent } from './admin-login/admindash/task/task.component';
import { Filterpipe4Pipe } from './filterpipe4.pipe';
import { CurrentTimeComponent } from './current-time/current-time.component';
import { AttendancesheetComponent } from './admin-login/admindash/attendancesheet/attendancesheet.component';
import { ChatOptionsComponent } from './chat-options/chat-options.component';
import { LoginpopupComponent } from './chat-options/loginpopup/loginpopup.component';
import { EmailserviceService } from './Services/emailservice.service';

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
    AttendancesheetComponent,
    ChatOptionsComponent,
    LoginpopupComponent,

   
   
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
    MatCheckboxModule

    
   
  ],
  providers: [MyserviceService,MatDialog,EmailserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
