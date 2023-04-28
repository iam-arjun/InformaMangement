import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog'
import { CVcompComponent } from './cvcomp/cvcomp.component';
import { SalarysheetComponent } from './salarysheet/salarysheet.component';
import { MyserviceService } from 'src/app/Services/myservice.service';

@Component({
  selector: 'app-employe-details',
  templateUrl: './employe-details.component.html',
  styleUrls: ['./employe-details.component.css']
})
export class EmployeDetailsComponent implements OnInit {
  changeTitle:boolean = false;
  search: string = ''
  EmpDetails: any = [];
  name1 = ""
  nameSearch: string = ".._arju_.."
  empname: string; empemail: string; empphone: string; empaddress: string; emppan: string; empbankname: string;
  empaccounNo: string; empsalary: string; empjoin: string; empexpiry: string; empGuard: string;
  EMP_CV_DETIALS:any = []


  constructor(private _service: MyserviceService, private dialogRef: MatDialog) {
    this._service.EMP_DETAILS_ARRAY.subscribe(res => {
      console.log(res)
      this.EmpDetails = res
      // console.log(this.EmpDetails)
    })
  }

  ngOnInit() {
    this._service.name.subscribe(res => console.log(res));
    this.EMP_CV_DETIALS = JSON.parse(localStorage.getItem('FILE_URL_ARRAY-1'))


  }

  CreateCV(name, email, address,guardPhone, bank, account, pan, salary, join, leave,PPURL) {
    this.dialogRef.open(CVcompComponent)
    console.log(name)
    this.empname = name;
    this._service.Ename.next(this.empname)
    this.empemail = email;
    this._service.Eemail.next(this.empemail)
    this.empaddress = address;
    this._service.Eaddress.next(this.empaddress)

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
  CalculateSal(empName){
    // this.dialogRef.open(SalarysheetComponent)
    this._service.SALARY_SPECIFIC_USER.next(empName)
    this.changeTitle = true;



  }




}
