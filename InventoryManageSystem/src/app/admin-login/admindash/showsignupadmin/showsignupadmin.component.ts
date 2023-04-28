import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MyserviceService } from 'src/app/Services/myservice.service';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-showsignupadmin',
  templateUrl: './showsignupadmin.component.html',
  styleUrls: ['./showsignupadmin.component.css']
})
export class ShowsignupadminComponent implements OnInit {
@ViewChild('email') _email:ElementRef;
@ViewChild('pass') _pass:ElementRef;
  constructor(private _service: MyserviceService, private dialogRef: MatDialog) { }

  ngOnInit(): void {



  }


  SignUp(){
    
    let email = this._email.nativeElement.value;
    let password = this._pass.nativeElement.value;
    console.log(email)
    if(email!="" &&password!=""){
      this._service._signup(email, password).subscribe(res => { console.log(res);
      this.dialogRef.closeAll() },
      err => {
        console.log(err)
       
      })
    }
  

  }
}
