import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MyserviceService } from '../Services/myservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailserviceService } from '../Services/emailservice.service';
import "../../assets/smtp.js"
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit, AfterViewInit {
  show_login: boolean = true;
  Office_emp: any = []
  all_emp: any = []
  Input_email = ""
  Input_pass = ""
  AdminId = "r"
  AdminPass = "r"
  show_confirm_pass: boolean = false;
  show_signUp: boolean = false;
  LoginBtn = "Login"
  LoginUser: FormGroup;
  tempArra: any[];
  errMsgs: any;
  afterLogin: boolean = false;

  loginErr: any;
  tempuserarray: any = []

  constructor(private _service: MyserviceService, private fb: FormBuilder, private _eservice: EmailserviceService, private http: HttpClient, private router: Router) { }
  ngAfterViewInit(): void {
    this.errMsgs = this._service.errMsg;


  }

  ngOnInit(): void {

    let temp = JSON.parse(sessionStorage.getItem('ADMINLOGIN-0'));
    if (temp) {
      this._service.showAdmin.next(true)
      this._service.showUser.next(false)
      this._service.showLogin.next(false)
    }

    // let tempuser = JSON.parse(sessionStorage.getItem('USERPANEL-0'))
    let tempuserarray = JSON.parse(sessionStorage.getItem('USER_PANEL_ARRAY'))
    let jsonuser = JSON.parse(sessionStorage.getItem('USERPANEL-0'))
    if (tempuserarray) {
      let tempuser = tempuserarray.find(obj => obj.email === jsonuser.email)


      if (tempuser) {
        this._service.showUser.next(true)
        this._service.showAdmin.next(false)
        this._service.showLogin.next(false)
        console.log(JSON.parse(sessionStorage.getItem('USER_PANEL_ARRAY')))


        console.log(tempuser)
      }
    }




    this.LoginUser = this.fb.group({
      _id: [''],

      email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required, Validators.min(8)]],
    })




  }


  Login() {


    let email = this.LoginUser.value.email;
    let password = this.LoginUser.value.password;
    if (this.LoginUser.valid) {
      if (this.show_signUp) {


        this._service._signup(email, password).subscribe(res => { console.log(res) },
          err => {
            console.log(err)
            this.loginErr = this.errMsgs[err.error.error.message]
          })
        this.LoginUser.reset();


      }
      else {
        this._service.getEmployee().subscribe(res => {
          this.Office_emp = res


          for (let i = 0; i < this.Office_emp.length; i++) {
            let temp_email = this.Office_emp[i].email;
            let temp_pass = this.Office_emp[i].password;
            let temp_name = this.Office_emp[i].name;
            let temp_id = this.Office_emp[i].empid;
            let temp_proff = this.Office_emp[i].profession;
            let temp_worktime = this.Office_emp[i].worktime
            console.log(temp_worktime)

            if (temp_email == email && temp_pass == password) {

              sessionStorage.setItem('USERPANEL-0', JSON.stringify(this.LoginUser.value))


              this._service.showUser.next(true)
              this._service.showLogin.next(false)
              this._service.showAdmin.next(false)

              sessionStorage.setItem('username', temp_name);
              sessionStorage.setItem('userid', temp_id);
              sessionStorage.setItem('useremail', temp_email);
              sessionStorage.setItem('userproff', temp_proff)

              this.tempuserarray.push(this.LoginUser.value)

              sessionStorage.setItem('USER_PANEL_ARRAY', JSON.stringify(this.tempuserarray))


            }
            else {
              // only for the admin ......................................................................................

              this._service._signin(email, password).subscribe(res => {
                console.log(res)

                this.LoginUser.reset()

                this._service.showLogin.next(false)
                this._service.showAdmin.next(true)
                this._service.showUser.next(false)
                sessionStorage.setItem('ADMINLOGIN-0',JSON.stringify(this.LoginUser.value))



              }, err => {
                console.log(err)

                this.loginErr = this.errMsgs[err.error.error.message]

              })
              // ends here ..............................................................................................

            }

          }
        })
      }

    }



  }



  add_signup_field() {
    this.show_signUp = !this.show_signUp;

  }
}
