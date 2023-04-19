import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MyserviceService } from 'src/app/Services/myservice.service';

@Component({
  selector: 'app-attendancesheet',
  templateUrl: './attendancesheet.component.html',
  styleUrls: ['./attendancesheet.component.css']
})
export class AttendancesheetComponent implements OnInit, AfterViewInit {
  attendance_emp: any = []
  AttendedEmp: any = []
  temp: boolean = false;
  TOTAL_ATTENDACE: any;
  attendace_date = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32
  ]
  @ViewChild('date') _date: ElementRef;
  @ViewChild('attendanceName') _name: ElementRef;
  @ViewChild('check') _checkAtt: ElementRef;
  @ViewChild('totalatt') _totalAtt: ElementRef;
  Newarray: any = []
  Newobj = {
    
  }
  constructor(private _service: MyserviceService) { }
  ngOnInit(): void {
this.Newarray = JSON.parse(localStorage.getItem('Newarray'))
console.log(this.Newarray)
}
  ngAfterViewInit(): void {



    this.AttendedEmp = JSON.parse(localStorage.getItem('attarr'))
    console.log(this.AttendedEmp)
    this._service.getEmployee().subscribe(res => {
      this.attendance_emp = res;
      for (let i = 0; i < this.attendance_emp.length; i++) {
        let tempname = this.attendance_emp[i].name;
        console.log(tempname)
        for (let j = 0; j < this.AttendedEmp.length; j++) {
          let tempname1 = this.AttendedEmp[j].name;
          console.log(tempname1)
          if (tempname == tempname1) {
            this.temp = true;
            console.log(this.temp)
          }
        }
      }

    })

    // for(let i=0;i<this.AttendedEmp.length;i++){
    // let tempTotal = this.AttendedEmp[i].actualAtt;
    // console.log(tempTotal)
    // let TOTALATTENDANCE;
    // TOTALATTENDANCE = (  parseFloat(this.AttendedEmp[i].actualAtt)+ parseFloat(this.AttendedEmp[i+1].actualAtt) + parseFloat(this.AttendedEmp[i+2].actualAtt))
    // console.log(TOTALATTENDANCE)
    // this.TOTAL_ATTENDACE  = TOTALATTENDANCE;

    // }

    // for (let j = 0; j < this.AttendedEmp.length; j++) {
    //   console.log(this.AttendedEmp[i].name)
    //   if (tempname == this.AttendedEmp[i].name) {
    //     this.temp = true;
    //     console.log(this.temp)
    //   }
    // }
  }

}




