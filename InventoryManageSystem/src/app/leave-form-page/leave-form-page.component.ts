import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../Services/myservice.service';

@Component({
  selector: 'app-leave-form-page',
  templateUrl: './leave-form-page.component.html',
  styleUrls: ['./leave-form-page.component.css']
})
export class LeaveFormPageComponent implements OnInit {
  [x: string]: any;
  leave_form_arr: any = []
  leaveApprovalarr: any[] = new Array();
  leaveApprovalStatus: any;
  Leave_date_arr: any[]
  temp_date = ""
  prefixId: string = 'INFORMA1000'
  DateSearch: string = "2023-04-01"
  DateSearch2: string = "2023-05-30"
  constructor(private _service: MyserviceService) {
    this._service.getLeave().subscribe(res => {
      console.log(res); this.leave_form_arr = res; console.log(this.leave_form_arr);


    })

  }

  ngOnInit(): void {
 
    this.leaveApprovalarr = JSON.parse(localStorage.getItem('LeaveArr-0'))
    console.log(this.leave_form_arr)

    console.log(this.leaveApprovalarr)




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
    let tempob: any


    tempob = JSON.parse(localStorage.getItem('LeaveObj'));
    this.leaveApprovalarr.push(tempob)
    localStorage.setItem('LeaveArr-0', JSON.stringify(this.leaveApprovalarr))



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
    let tempob: any


    tempob = JSON.parse(localStorage.getItem('LeaveObj'));
    this.leaveApprovalarr.push(tempob)
    localStorage.setItem('LeaveArr-0', JSON.stringify(this.leaveApprovalarr))


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
    let tempob: any


    tempob = JSON.parse(localStorage.getItem('LeaveObj'));
    this.leaveApprovalarr.push(tempob)
    localStorage.setItem('LeaveArr-0', JSON.stringify(this.leaveApprovalarr))
  }

}


