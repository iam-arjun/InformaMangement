import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/Services/myservice.service';

@Component({
  selector: 'app-salaryslip',
  templateUrl: './salaryslip.component.html',
  styleUrls: ['./salaryslip.component.css']
})
export class SalaryslipComponent implements OnInit {
  datesearch = ".._arju_.."

  SHOW_ALL_EMP_SAL: any = []
  constructor(private _service: MyserviceService) { }

  ngOnInit(): void {
    this.SHOW_ALL_EMP_SAL = JSON.parse(localStorage.getItem('SALARY_SLIPS_ARRAY'))

    console.log(this.SHOW_ALL_EMP_SAL)
  }

  clearSal(index) {
    if (confirm('Clear this item?')) {
      this.SHOW_ALL_EMP_SAL.splice(this.SHOW_ALL_EMP_SAL.indexOf(this.SHOW_ALL_EMP_SAL[index]), 1)
      localStorage.setItem('SALARY_SLIPS_ARRAY', JSON.stringify(this.SHOW_ALL_EMP_SAL))
   this.SHOW_ALL_EMP_SAL = JSON.parse(localStorage.getItem('SALARY_SLIPS_ARRAY'))


    }

  }s
}
