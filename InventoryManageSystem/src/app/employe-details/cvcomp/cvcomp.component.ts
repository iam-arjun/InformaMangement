import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyserviceService } from 'src/app/Services/myservice.service';

@Component({
  selector: 'app-cvcomp',
  templateUrl: './cvcomp.component.html',
  styleUrls: ['./cvcomp.component.css']
})
export class CVcompComponent implements OnInit {
  imgUrl:any;
  empname: string; empemail: string; empphone: string; empaddress: string; emppan: string; empbankname: string;
  empaccountNo: string; empsalary: string; empjoin: string; empexpiry: string; empGuard: string;PPURL:any;

  constructor(private _service:MyserviceService ,private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this._service.Ename.subscribe(res=>{this.empname = res})
    this._service.Eemail.subscribe(res=>{this.empemail = res})
    this._service.Ephone.subscribe(res=>{this.empphone = res})
    this._service.Eaddress.subscribe(res=>{this.empaddress = res})
    this._service.Epan.subscribe(res=>{this.emppan = res})
    this._service.Ebank.subscribe(res=>{this.empbankname = res})
    this._service.Eacc.subscribe(res=>{this.empaccountNo = res})
    this._service.Esalary.subscribe(res=>{this.empsalary = res})
    this._service.Ejoin.subscribe(res=>{this.empjoin = res})
    this._service.Eleave.subscribe(res=>{this.empexpiry = res})
    this._service.Eguard.subscribe(res=>{this.empGuard = res})
    
this._service.EppUrl.subscribe(res=>{this.PPURL = res;console.log(this.PPURL)})

    
  }

  closeCV(){
    this.dialogRef.closeAll()
  }

}
