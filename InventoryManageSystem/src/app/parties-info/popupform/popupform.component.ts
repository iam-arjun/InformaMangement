import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from 'src/app/Services/myservice.service';
import { MatDialog } from '@angular/material/dialog'
import { FileUploadService } from 'src/app/Services/file-upload.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-popupform',
  templateUrl: './popupform.component.html',
  styleUrls: ['./popupform.component.css']
})
export class PopupformComponent implements OnInit {
  Allemp: any = FormGroup;
  imgUrl;
  localUrl: any[];
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File = null;

  PROFESSION_ARRAY: any = [
    "Branch Manager", "Project Manager", "Supervisor", "Writer", "Data Entry", "Developer"
  ]
  emp_ppimg_arr: any = []




  constructor(private fb: FormBuilder, private _service: MyserviceService, private dialogRef: MatDialog, private fileUploadService: FileUploadService, private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {

    console.log(JSON.parse(localStorage.getItem('imgArr')))
    const data = this.imgUrl;
    const blob = new Blob([data], {
      type: 'application/octet-stream'
    });
    this.imgUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));




    this.Allemp = this.fb.group({


      fullname: ['', Validators.required,],
      phoneno: ['', Validators.required],
      address: ['', Validators.required],
      guardno: ['', Validators.required],
      email: ['', Validators.required],
      panno: ['', Validators.required],
      bankname: ['', Validators.required],
      accountno: ['', Validators.required],
      salary: ['', Validators.required],
      workingshift: [, Validators.required],
      joindate: ['', Validators.required],
      expirydate: ['', Validators.required],
      profession: ['', Validators.required],
      pp_url: ['', Validators.required]

    })
    console.log(this.Allemp.value.pp_url)
  }

  hideModal() {
    this.dialogRef.closeAll()

  }

  // Single employee post and get ..........................................
  Onsubmit() {
    if (this.Allemp.valid) {
      localStorage.setItem('workinghours',this.Allemp.value.workingshift)
      this._service.SaveAllEmp(this.Allemp.value).subscribe((res) => {
        console.log(res)
        this.getClientsData()

        this._service.show_empDetails.next(true)


        this.Allemp.reset();
        this.hideModal()

      }, (err) => { console.log(err) });
    }

  }

  getClientsData() {

    this._service.getAllEmployee().subscribe((res) => {
      console.log(res)
      this._service.PARTIES_DETAILS.next(res)
      this._service.PARTIES_DETAILS.subscribe(res => {
      }
      )



    }, (error) => {
      console.log(error)
    })

  }


  // On file Select
  onChange(event) {
    this.file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        let temp = event.target.result;

        // localStorage.setItem('imgUrl',temp)
        // this.imgUrl = localStorage.getItem('imgUrl')



        this.Allemp.value.pp_url = temp;
        localStorage.setItem('imgArr', this.emp_ppimg_arr.push(temp))
      }

      reader.readAsDataURL(event.target.files[0]);

    }


  }

  // OnClick of button Upload
  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {

          // Short link via api response
          this.shortLink = event.link;

          this.loading = false; // Flag variable 
        }
      }
    );
    alert('Uploaded Successfully')
  }


}
