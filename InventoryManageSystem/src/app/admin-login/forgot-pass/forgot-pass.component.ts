import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from 'src/app/Services/myservice.service';
import { MatDialog } from '@angular/material/dialog'
@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {
  forgotPass: FormGroup;
  PasswordResetSuccess:boolean = false;
  SpinnerStatus:boolean = false;

  constructor(private fb: FormBuilder, private _service: MyserviceService, private dialogRef: MatDialog) { }

  ngOnInit(): void {

    this.forgotPass = this.fb.group({
      email: ['', Validators.required]
    })

  }

  FORGOT_PASS() {
    console.log('success')
    if (this.forgotPass.valid) {
      this.SpinnerStatus = true;


      this._service.ForgotPassword(this.forgotPass.value).subscribe(res => {
        console.log(res)
        this.SpinnerStatus = false;
        this.PasswordResetSuccess = true
     

      }, error => {
        console.log(error)
      })

    }

  }

  close(){
    this.dialogRef.closeAll()
  }

}
