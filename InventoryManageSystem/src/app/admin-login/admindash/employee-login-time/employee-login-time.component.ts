import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/Services/myservice.service';

@Component({
  selector: 'app-employee-login-time',
  templateUrl: './employee-login-time.component.html',
  styleUrls: ['./employee-login-time.component.css']
})
export class EmployeeLoginTimeComponent implements OnInit {
  namesearch = ".._arju_.."

  emp_login_time_details:any = [ ]
  constructor(private _service:MyserviceService) { }

  ngOnInit(): void {

    this._service.getEmpLoginTimeDetails().subscribe(res=>{
      console.log(res);this.emp_login_time_details = res
    }
    ,err=>{
      console.log(err)
    })

  }

}
