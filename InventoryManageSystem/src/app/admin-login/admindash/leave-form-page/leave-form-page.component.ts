import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MyserviceService } from 'src/app/Services/myservice.service';

@Component({
  selector: 'app-leave-form-page',
  templateUrl: './leave-form-page.component.html',
  styleUrls: ['./leave-form-page.component.css']
})
export class LeaveFormPageComponent implements OnInit {
  [x: string]: any;
  leave_form_arr: any = []
  leaveApprovalarr = []
  leaveApprovalStatus: any;
  Leave_date_arr: any[]
  temp_date = ""
  prefixId: string = 'INFORMA1000'
  DateSearch: string = "2023-04-01"
  DateSearch2: string = "2023-05-30"
  constructor(private _service: MyserviceService, private _snackBar: MatSnackBar) {
    this.getLeaveform()

  }

  ngOnInit(): void {





  }

  acceptReq(name, breakperiod, leavestart, leaveend) {
    console.log('hello')
    this.leaveApprovalStatus = "Approved"
    localStorage.setItem('leaveApprovalStatus', this.leaveApprovalStatus)
    console.log(this.leaveApprovalStatus)
    let leaveApprovalobj = {
      name: "",
      breakperiod: "",
      leavestart: "",
      leaveend: "",
      status: ""
    }
    leaveApprovalobj.name = name;
    leaveApprovalobj.breakperiod = breakperiod;
    leaveApprovalobj.leaveend = leaveend;
    leaveApprovalobj.leavestart = leavestart;
    leaveApprovalobj.status = this.leaveApprovalStatus;

    localStorage.setItem('LeaveObj', JSON.stringify(leaveApprovalobj))
    let getob = JSON.parse(localStorage.getItem('LeaveObj'))
    this.leaveApprovalarr.push(getob)
    console.log(this.leaveApprovalarr)
    localStorage.setItem('LeaveApproval', JSON.stringify(this.leaveApprovalarr))
    let snackbarRef = this._snackBar.open(`Leave request of ${name} ${this.leaveApprovalStatus}`);
    setTimeout(() => {
      snackbarRef.dismiss()


    }, 2000);






  }

  rejectReq(name, breakperiod, leavestart, leaveend) {
    this.leaveApprovalStatus = "Rejected"
    localStorage.setItem('leaveApprovalStatus', this.leaveApprovalStatus)
    let leaveApprovalobj = {
      name: "",
      breakperiod: "",
      leavestart: "",
      leaveend: "",
      status: ""
    }
    leaveApprovalobj.name = name;
    leaveApprovalobj.breakperiod = breakperiod;
    leaveApprovalobj.leaveend = leaveend;
    leaveApprovalobj.leavestart = leavestart;
    leaveApprovalobj.status = this.leaveApprovalStatus;

    localStorage.setItem('LeaveObj', JSON.stringify(leaveApprovalobj))
    let getob = JSON.parse(localStorage.getItem('LeaveObj'))
    this.leaveApprovalarr.push(getob)
    console.log(this.leaveApprovalarr)
    localStorage.setItem('LeaveApproval', JSON.stringify(this.leaveApprovalarr))
    let snackbarRef = this._snackBar.open(`Leave request of ${name} ${this.leaveApprovalStatus}`);
    setTimeout(() => {
      snackbarRef.dismiss()


    }, 2000);








  }

  holdReq(name, breakperiod, leavestart, leaveend) {
    this.leaveApprovalStatus = "Pending"
    localStorage.setItem('leaveApprovalStatus', this.leaveApprovalStatus)
    let leaveApprovalobj = {
      name: "",
      breakperiod: "",
      leavestart: "",
      leaveend: "",
      status: ""
    }
    leaveApprovalobj.name = name;
    leaveApprovalobj.breakperiod = breakperiod;
    leaveApprovalobj.leaveend = leaveend;
    leaveApprovalobj.leavestart = leavestart;
    leaveApprovalobj.status = this.leaveApprovalStatus;

    localStorage.setItem('LeaveObj', JSON.stringify(leaveApprovalobj))
    let getob = JSON.parse(localStorage.getItem('LeaveObj'))
    this.leaveApprovalarr.push(getob)
    console.log(this.leaveApprovalarr)
    localStorage.setItem('LeaveApproval', JSON.stringify(this.leaveApprovalarr))
    let snackbarRef = this._snackBar.open(`Leave request of ${name} ${this.leaveApprovalStatus}`);
    setTimeout(() => {
      snackbarRef.dismiss()


    }, 2000);



  }

  getLeaveform() {
    this._service.getLeave().subscribe(res => {
      console.log(res); this.leave_form_arr = res; console.log(this.leave_form_arr);





    })

  }



  clearleave(id) {
    if (confirm('Move to trash?')) {
      this._service.delLeave(id).subscribe(res => {
        console.log(res)
        this.getLeaveform()

      })

    }


  }
}


