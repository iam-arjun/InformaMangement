import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'
import { MyserviceService } from 'src/app/Services/myservice.service';
@Component({
  selector: 'app-loginpopup',
  templateUrl: './loginpopup.component.html',
  styleUrls: ['./loginpopup.component.css']
})
export class LoginpopupComponent implements OnInit {
  ChatLogin:FormGroup;

  constructor(private dialogRef: MatDialog,private fb:FormBuilder,private _service:MyserviceService) { }

  ngOnInit(): void {

    this.ChatLogin = this.fb.group({
      _id: [''],
      email: ['', Validators.required],
    password: ['', Validators.required],
    
    })

  }

  Login(){
    this.dialogRef.closeAll()

  }
  login_submit(){
    if(this.ChatLogin.valid){
      this._service.chatlogin(this.ChatLogin.value).subscribe(res=>{console.log(res)})
    }

  
  }
  getChatuser(){
    this._service.chatuser().subscribe(res=>{console.log(res)})
  }
}
