import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { EmployeModel } from './ClientModel';
import { OfficeModel } from './OfficeEmpModel';
import { MatDialog } from '@angular/material/dialog'
import { PopupformComponent } from './popupform/popupform.component';
import { MyserviceService } from 'src/app/Services/myservice.service';



@Component({
  selector: 'app-parties-info',
  templateUrl: './parties-info.component.html',
  styleUrls: ['./parties-info.component.css']
})
export class PartiesInfoComponent implements OnInit, AfterViewInit {
  yourname = 'arjunphyel'
  FormType = "";
  show_office_form:boolean = true;


  editmode = false;
  editmode2 = false;
  SHOW_SEARCHBAR = false;


  show_left_emp: boolean = true;

  officeEmp: FormGroup;
  Party_Array: any = []

  OFFICE_EMP_ARRAY: any = []
  nameSearch:string = ""

  selectedEmp: string;
  prefixId: string = 'INFORMA1000'
  suffixId:string = "@innovate.com"
  hide = true;
  hidepass = true;
  // EmpIdControl = new FormControl(null, Validators.required);

  PROFESSION_ARRAY:any  = [
    "Branch Manager","Project Manager","Supervisor","Writer","Data Entry","Developer"
  ]

  constructor(private fb: FormBuilder, private http: HttpClient, private _service: MyserviceService, private dialogRef: MatDialog) {

  }
  ngAfterViewInit(): void {


  }

  ngOnInit(): void {

    this._service.show_empDetails.subscribe(res => {
      this.show_left_emp = res
    })




    this.getOfficeData();
    this.getClientsData()

    this.officeEmp = this.fb.group({
      _id: [''],
      empid: ['', Validators.required],
      email: ['@innovatetech.com', Validators.required],
      name: ['', Validators.required],
      password: ['informatex@', Validators.required],
      profession: ['', Validators.required],
      worktime: ['', Validators.required],
      PPURL: ['', Validators.required],
    })


  }



  display() {

    this.dialogRef.open(PopupformComponent)

  }






  // Office Employee post and get method........................................



  addOfficeEmp() {

    if (this.editmode) {
      console.log(this.officeEmp.value)
      console.log(this.officeEmp.value._id)
      this._service.UpdateOfficeEmp(this.officeEmp.value).subscribe((res) => {
        console.log(res)
        this.getOfficeData()
      }, (error) => {
        console.log(error)
      })

    }
    else {
      if (this.officeEmp.valid) {
        this._service.SaveEmployee(this.officeEmp.value).subscribe((res) => {
          console.log(res)
          this.getOfficeData()
          this.show_office_form = false;



        }, (err) => { console.log(err) });
      }


    }


    this.officeEmp.reset();
  }


  getOfficeData() {

    this._service.getEmployee().subscribe((res) => {
      console.log(res)
      this.OFFICE_EMP_ARRAY = res

      console.log(this.OFFICE_EMP_ARRAY)

    }, (error) => {
      console.log(error)
    })




  }

  updateofficeEmp(emp) {
    this.officeEmp.patchValue(emp);
    console.log(emp._id)
    this.editmode = true;
  }



  deleteofficeEmp(id) {
    if (confirm('Do you want to delete this employee?')) {
      this._service.DeleteOfficeEmp(id).subscribe((res) => {
        console.log(res);
        this.getOfficeData()
      }, (error) => {
        console.log(error);
      })
    }

  }


  getClientsData() {
    if (this.editmode2) {



    }
    else {
      this._service.getAllEmployee().subscribe((res) => {
        console.log(res)

        this._service.EMP_DETAILS_ARRAY.next(res)


        this._service.PARTIES_DETAILS.next(res)
        this._service.PARTIES_DETAILS.subscribe(res => {
          this.Party_Array = res;
          console.log(this.Party_Array);


        }
        )



      }, (error) => {
        console.log(error)
      })

    }


  }
  DelEmp(Id) {
    if (confirm('Do you want to delete this employee?')) {
      this._service.DeleteEmp(Id).subscribe((res) => {
        console.log(res);
        this.getClientsData()
      }, (error) => {
        console.log(error);
      })
    }

  }

  updatePersonalEmp(Emp) {

    console.log(Emp._id)
    this.editmode2 = true;

    this.display()
    this._service.PARTIES_DETAILS_FORM.next(Emp)




  }


  show_searchBar(){
    this.SHOW_SEARCHBAR = true;

  }

  hide_office_form(){
    this.show_office_form = false;

  }
}
