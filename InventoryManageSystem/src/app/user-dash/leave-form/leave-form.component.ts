import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'
import { MyserviceService } from 'src/app/Services/myservice.service';
@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.css']
})
export class LeaveFormComponent implements OnInit {
  Leaveform: FormGroup;


  constructor(private dialogRef: MatDialog, private fb: FormBuilder, private _service: MyserviceService) { }

  ngOnInit(): void {
    let tempname = sessionStorage.getItem('username')
    let tempproff = sessionStorage.getItem('userproff')



    this.Leaveform = this.fb.group({
      _id: [''],
      name: [tempname, Validators.required],
      profession: [tempproff, Validators.required],
      phone: ['', Validators.required],

      BreakPeriod: ['', Validators.required],
      DateRequested: ['', Validators.required],
      LeaveStart: ['', Validators.required],
      LeaveEnd: ['', Validators.required],
      EmpSign: ['', Validators.required],
      ReasonForLeave: ['', Validators.required],
    })
    this.GetLeave()

  }

  Leave_form_submit() {

    console.log(this.Leaveform.value)
    this._service.show_popup_req.next(true)
    this._service.saveLeave(this.Leaveform.value).subscribe(res => {
      console.log(res)
    })
    this.dialogRef.closeAll()


  }

  GetLeave() {
    this._service.getLeave().subscribe(res => {
      console.log(res)
      this._service.LEAVE_FORM_ARRAY.next(res)
    })

  }





  HIDE_LEAVE_FORM() {
    if (this.Leaveform.valid) { this.dialogRef.closeAll(); }

  }
}
