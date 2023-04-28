import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'
import { MyserviceService } from 'src/app/Services/myservice.service';
@Component({
  selector: 'app-salarysheet',
  templateUrl: './salarysheet.component.html',
  styleUrls: ['./salarysheet.component.css']
})
export class SalarysheetComponent implements OnInit {
  SALARY_SHEET_EMP: any = []
  SALARY_USER: any;
  SALARY_FORM: any = FormGroup;
  TOTAL_ATTENDANCE: any = []
  TotalAtt: any = null;



  constructor(private dialogRef: MatDialog, private _service: MyserviceService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this._service.getEmpLoginTimeDetails().subscribe(res => {
      this.SALARY_SHEET_EMP = res


      this._service.SALARY_SPECIFIC_USER.subscribe(res => {
        this.SALARY_USER = res; console.log(this.SALARY_USER)

        let Sal_obj = this.SALARY_SHEET_EMP.filter(obj => obj.name === this.SALARY_USER)

        for (let i = 0; i < Sal_obj.length; i++) {

          this.TOTAL_ATTENDANCE.push(parseFloat(Sal_obj[i].day_attendance))


        }

        for (let j = 0; j < this.TOTAL_ATTENDANCE.length; j++) {

          this.TotalAtt = this.TotalAtt + this.TOTAL_ATTENDANCE[j]



        }
        let TempObj = {
          name: this.SALARY_USER,
          workDays: this.TotalAtt
        }
        this._service.saveEmpSalary(TempObj).subscribe(res => {
          console.log(res)
        })


        // SALARY SHEET FORM 

        this._service.TOTAL_WORKING_DAYS.next(this.TotalAtt)

        this.SALARY_FORM = this.fb.group({
          id: [''],
          name: [this.SALARY_USER, Validators.required],

          total_att: [parseFloat(this.TotalAtt), Validators.required],
          sal_rate: ['', Validators.required],
          final_amt: ['']
        })


      })



    }, err => {
      console.log(err);
    })


  }





  closeSal() {
    this.dialogRef.closeAll()
  }

  final_sal() {
    if (this.SALARY_FORM.valid) {
      console.log(this.SALARY_FORM)
      let salObj = this.SALARY_FORM.value;
      let tempAmt = parseFloat(salObj.total_att) * parseFloat(salObj.sal_rate)
      this.SALARY_FORM.controls['final_amt'].setValue(tempAmt)
      this._service.saveEmpSalary(this.SALARY_FORM.value).subscribe(res => {
        console.log(res)
        alert('YOU HAVE SUCCESSFULLY SAVED YOUR EMPLOYEE SALARY DETAILS')
        this.dialogRef.closeAll()
      }, err => {
        console.log(err)
      })

    }


  }
}
