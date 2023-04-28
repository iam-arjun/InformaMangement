import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { MyserviceService } from 'src/app/Services/myservice.service';
import { LeaveFormComponent } from '../../leave-form/leave-form.component';
@Component({
  selector: 'app-emp-leave-req-status',
  templateUrl: './emp-leave-req-status.component.html',
  styleUrls: ['./emp-leave-req-status.component.css']
})
export class EmpLeaveReqStatusComponent implements OnInit {

  leaveArray: any = []
  leaveStatus: any;

  constructor(private _service: MyserviceService, private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this._service.getLeave().subscribe(res => {
      let tempname = sessionStorage.getItem('username')
      console.log(tempname)
      console.log(typeof (tempname))
      let temparr: any = []

      temparr = JSON.parse(localStorage.getItem('LeaveApproval'))
      console.log(temparr)
      // let tempobj = temparr.filter(ob => ob.name === tempname)
      // console.log(tempobj)
      // this.leaveArray = tempobj


      function eachLeave(element, index, array) {
        console.log(tempname)
        return (element.name===tempname);
      }

      // Driver code


      // check for positive number 
      let tempob = temparr.filter(eachLeave);
      console.log(tempob);
      this.leaveArray = tempob

      console.log(this.leaveArray)



    })

  }


  show_leave_modal() {
    this.dialogRef.open(LeaveFormComponent)

  }

  delleavereq(i, leavestart) {

    console.log(i)
    if (confirm('It will delete your selected item.')) {
      let delIndex = i;
      this.leaveArray.splice(delIndex, 1)


      let temparr = JSON.parse(localStorage.getItem('LeaveArr-0'))
      let tempob = temparr.find(ob => ob.leavestart === leavestart)
      console.log(tempob)
      temparr.splice(temparr.indexOf(tempob), 1)
      console.log(temparr)
      localStorage.setItem('LeaveArr-0', JSON.stringify(temparr))


    }


  }

}
