import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, DoCheck, AfterContentChecked, AfterContentInit } from '@angular/core';
import { MyserviceService } from 'src/app/Services/myservice.service';
import { MatDialog } from '@angular/material/dialog'
import { EmpReqPopComponent } from './emp-req-pop/emp-req-pop.component';
import { ShowsignupadminComponent } from './showsignupadmin/showsignupadmin.component';


@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit, AfterViewInit {
  show_contract_update: boolean = false;
  show_add_emp: boolean = true;
  show_emp_details: boolean = false;
  show_task: boolean = false;
  show_attendace: boolean = false;
  show_emp_leave: boolean = false;
  show_sal_slip:boolean = false;
  show_salary_sheet:boolean = false;
  SHOW_EMP_POPUP: boolean = false;
  leave_form_array: any = []
  ADMIN_NAME: any;



  constructor(private _service: MyserviceService, private dialogRef: MatDialog) {

  }


  ngOnInit(): void {
    console.log('ngoninit run')
    this._service.show_popup_req.subscribe(res => { console.log(res); this.SHOW_EMP_POPUP = res; console.log(this.SHOW_EMP_POPUP); if (this.SHOW_EMP_POPUP) { this.dialogRef.open(EmpReqPopComponent) } })

    this._service.LEAVE_FORM_ARRAY.subscribe(res => { console.log(res); this.leave_form_array = res; })
    this.ADMIN_NAME = sessionStorage.getItem('ADMIN_NAME')

  }

  logout_admin() {
    if (confirm('Do you want to logout from admin panel?')) {

      sessionStorage.removeItem('ADMINLOGIN-0')
      this._service.showLogin.next(true)
      this._service.showAdmin.next(false)
    }




  }
  signup_admin(){
  
    this.dialogRef.open(ShowsignupadminComponent)


  }



  ngAfterViewInit() {
    console.log('ngafterviewinit')



  }
  // ngDoCheck(){
  //   console.log('ngDOCHECK RUN')
  //   this._service.show_popup_req.subscribe(res=>{this.SHOW_EMP_POPUP=res;console.log(`POP` +this.SHOW_EMP_POPUP)})
  //   this.dialogRef.open(EmpReqPopComponent)

  // }




  menu_display1() {
    this.show_add_emp = true;
    this.show_emp_details = false;
    this.show_emp_leave = false;
    this.show_contract_update = false;
    this.show_task = false;
    this.show_attendace = false;
    this.show_salary_sheet = false; this.show_sal_slip = false;



  }
  menu_display2() {
    this.show_add_emp = false;
    this.show_emp_details = true;
    this.show_emp_leave = false;
    this.show_contract_update = false;
    this.show_task = false;
    this.show_attendace = false;
    this.show_salary_sheet = false; this.show_sal_slip = false;

  }
  menu_display3() {
    this.show_add_emp = false;
    this.show_emp_details = false
    this.show_emp_leave = true;
    this.show_contract_update = false;
    this.show_task = false;
    this.show_attendace = false;
    this.show_salary_sheet = false; this.show_sal_slip = false;


  }

  menu_display4() {
    this.show_add_emp = false;
    this.show_emp_details = false
    this.show_emp_leave = false;
    this.show_contract_update = true;
    this.show_task = false;
    this.show_attendace = false;
    this.show_salary_sheet = false; this.show_sal_slip = false;
  }


  menu_display5() {
    this.show_add_emp = false;
    this.show_emp_details = false
    this.show_emp_leave = false;
    this.show_contract_update = false;

    this.show_task = true;
    this.show_attendace = false;
    this.show_salary_sheet = false;
    this.show_sal_slip = false;

  }

  menu_display6(){
    this.show_sal_slip = true;
    this.show_add_emp = false;
    this.show_emp_details = false
    this.show_emp_leave = false;
    this.show_contract_update = false;

    this.show_task = false;
    this.show_attendace = false;
    this.show_salary_sheet = false;

  }
  menu_display7(){
    this.show_add_emp = false;
    this.show_emp_details = false
    this.show_emp_leave = false;
    this.show_contract_update = false;

    this.show_task = false;
    this.show_attendace = true;
    this.show_salary_sheet = false;  this.show_sal_slip = false;
  }

  menu_display8(){
    this.show_add_emp = false;
    this.show_emp_details = false
    this.show_emp_leave = false;
    this.show_contract_update = false;

    this.show_task = false;
    this.show_attendace = false;
    this.show_salary_sheet = true;  this.show_sal_slip = false;

  }
}
