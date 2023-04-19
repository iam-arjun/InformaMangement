import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyserviceService } from 'src/app/Services/myservice.service';
import { LeaveFormComponent } from '../../leave-form/leave-form.component';
import { AttendanceModel } from 'src/app/admin-login/admindash/attendancesheet/attendance.model';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit, AfterViewInit {

  @ViewChild('logIninput') LOGINMESSAGE: ElementRef;

  @ViewChild('logoutinput') LOGOUTMESSAGE: ElementRef;
  @ViewChild('loginHeader') LOGINHEADER: ElementRef;

  Emp_dash_array: any = []
  Emp_name = ""
  Emp_id = ""
  Emp_email = ""
  Emp_proff = ""
  PROFILE_ARRAY: any = []
  Attendace_array1: any = []
  login_credentials_array: any = []

  SHOW_ATTEND: boolean = true;
  current_time: any;

  disableLogin: boolean = false;
  disableLogout: boolean = false;
  ConfirmLoginNotification = false;
  USER_LOGIN_TIME: any;
  USER_LOGOUT_TIME: any;
  worktime: any;
  tempboll: any;


  Newarray = []

  constructor(private dialogRef: MatDialog, private _service: MyserviceService) {
    this.worktime = parseInt(sessionStorage.getItem('WORKTIME'))

  }
  ngAfterViewInit(): void {



  }

  ngOnInit(): void {
    let tempBool = Boolean(sessionStorage.getItem('disablelogin'))
    if (tempBool) {
      setInterval((): void => { this.disableLogin = true }, 0.00000000000001);
    }



    this.Attendace_array1 = JSON.parse(sessionStorage.getItem('attarr'))
    this.Newarray = JSON.parse(sessionStorage.getItem('Newarray'))
    this._service.Newarray.next(this.Newarray)


    this._service.getEmployee().subscribe(res => {
      console.log(res); this.Emp_dash_array = res

      console.log(this.Emp_dash_array.length)

    })

    this.Emp_name = sessionStorage.getItem('username');
    this.Emp_id = sessionStorage.getItem('userid');
    this.Emp_email = sessionStorage.getItem('useremail');
    this.Emp_proff = sessionStorage.getItem('userproff')
    this.USER_LOGIN_TIME = sessionStorage.getItem('USER_LOGIN_TIME')
    if (this.USER_LOGIN_TIME) {
      this.SHOW_ATTEND = false;
    }
    if (this.Newarray) {
      this.Newarray.splice(this.Newarray.indexOf(this.Emp_name), 1)
    }





  }

  loginTime() {

    // let getHour = 9;
    // let getMin = 30
    let getHour = new Date().getHours();
    let getMin = new Date().getMinutes();
    if (this.LOGINMESSAGE.nativeElement.value) {


      console.log(`${getHour}:${getMin}`)
      this.USER_LOGIN_TIME = `${getHour}:${getMin}`

      console.log(this.USER_LOGIN_TIME)
      sessionStorage.setItem('USER_LOGIN_TIME', this.USER_LOGIN_TIME)

      this.LOGINMESSAGE.nativeElement.value = ""

      this.disableLogin = true;
 
      sessionStorage.setItem('disablelogin', 'false')
      setTimeout((): void => { sessionStorage.removeItem('disablelogin')}, 10000);






    }

  }


  logoutTime(empName) {
    // let getHour = 17
    // let getMin = 5

    if (this.LOGOUTMESSAGE.nativeElement.value) {
      let getHour = new Date().getHours();
      let getMin = new Date().getMinutes()
      let currentDate = new Date().toLocaleDateString()
      console.log(currentDate)


      this.USER_LOGOUT_TIME = `${getHour}:${getMin}`

      let temp1 = this.USER_LOGIN_TIME.split(":")
      let temp2 = this.USER_LOGOUT_TIME.split(":")
      console.log(temp1[0])
      let actual_work_hour = temp2[0] - temp1[0];
      let actual_work_min = temp2[1] - temp1[1];
      let totalHours = actual_work_hour + (actual_work_min / 60);
      console.log(totalHours)
      let actualAttendance = totalHours / this.worktime;
      console.log(actualAttendance)
      sessionStorage.setItem('USER_LOGOUT_TIME', this.USER_LOGOUT_TIME)


      if (actualAttendance) {
        this.Newarray.push(empName, actualAttendance)
        sessionStorage.setItem("Newarray", JSON.stringify(this.Newarray))


      }

      this.LOGOUTMESSAGE.nativeElement.value = ""
      this.disableLogout = true;
      setTimeout((): void => { this.disableLogout = false }, 10000);


    }

  }

  SHOW_ATTENDANCE() {
    this.SHOW_ATTEND = false;


  }

  SHOW_LEAVE_FORM() {
    console.log("hello")
    this.dialogRef.open(LeaveFormComponent)

  }
}
