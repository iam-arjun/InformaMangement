import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../Services/myservice.service';
import { MatDialog } from '@angular/material/dialog'
import { CVcompComponent } from './cvcomp/cvcomp.component';

@Component({
  selector: 'app-employe-details',
  templateUrl: './employe-details.component.html',
  styleUrls: ['./employe-details.component.css']
})
export class EmployeDetailsComponent implements OnInit {
  search: string = ''
  EmpDetails: any = [];
  name1 = ""
  nameSearch: string = ""
  empname: string; empemail: string; empphone: string; empaddress: string; emppan: string; empbankname: string;
  empaccounNo: string; empsalary: string; empjoin: string; empexpiry: string; empGuard: string;


  constructor(private _service: MyserviceService, private dialogRef: MatDialog) {
    this._service.EMP_DETAILS_ARRAY.subscribe(res => {
      console.log(res)
      this.EmpDetails = res
      // console.log(this.EmpDetails)
    })
  }

  ngOnInit() {
    this._service.name.subscribe(res => console.log(res));


  }

  CreateCV(name, email, address, phone, guardPhone, bank, account, pan, salary, join, leave,PPURL) {
    this.dialogRef.open(CVcompComponent)
    console.log(name)
    this.empname = name;
    this._service.Ename.next(this.empname)
    this.empemail = email;
    this._service.Eemail.next(this.empemail)
    this.empaddress = address;
    this._service.Eaddress.next(this.empaddress)
    this.empphone = phone;
    this._service.Ephone.next(this.empphone)
    this.empGuard = guardPhone;
    this._service.Eguard.next(this.empGuard)
    this.empbankname = bank;
    this._service.Ebank.next(this.empbankname)
    this.empaccounNo = account;
    this._service.Eacc.next(this.empaccounNo)
    this.emppan = pan;
    this._service.Epan.next(this.emppan)
    this.empsalary = salary;
    this._service.Esalary.next(this.empsalary)
    this.empjoin = join;
    this._service.Ejoin.next(this.empjoin)
    this.empexpiry = leave;
    this._service.Eleave.next(this.empexpiry)
    this._service.EppUrl.next(PPURL)


  }





}
