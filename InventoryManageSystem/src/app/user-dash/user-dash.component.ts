import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { MyserviceService } from '../Services/myservice.service';
import { LeaveFormComponent } from './leave-form/leave-form.component';


@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {

  SHOW_PROFILE: boolean = true;
  SHOW_LEAVE_STATUS: boolean = false;


  constructor(private _service: MyserviceService) { }

  ngOnInit(): void {

  }


  logout_user() {
    if (confirm('Do you want to logout from user panel?')) {
      let temp = JSON.parse(sessionStorage.getItem('USER_PANEL_ARRAY'))
      let temp2 = JSON.parse(sessionStorage.getItem('USERPANEL-0'))
      let temp3 = temp.find(obj => obj.email === temp2.email)
      let ind = temp.indexOf(temp3)
      temp.splice(ind)
      sessionStorage.setItem('USER_PANEL_ARRAY', JSON.stringify(temp))

      sessionStorage.removeItem('USERPANEL-0')
      this._service.showLogin.next(true)

    }




  }


  show_profile() {
    this.SHOW_PROFILE = true;
    this.SHOW_LEAVE_STATUS = false;


  }
  show_leave_req() {
    this.SHOW_PROFILE = false;
    this.SHOW_LEAVE_STATUS = true;


  }


}
