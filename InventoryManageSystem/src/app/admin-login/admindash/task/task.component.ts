import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FileUploadService } from 'src/app/Services/file-upload.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MyserviceService } from 'src/app/Services/myservice.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, AfterViewInit {
  FILEURL_ARRAY: any = []
  fileUrl: any;
  localUrl: any[];
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file

  TASK_EMP_ARRAY: any = []
  prefixId: string = 'INFORMA1000'
  nameSearch: string = ".._arju_.."
  tempFileUrl: any = []
  TOTAL_EMP: any = []
  @ViewChild('file1') myfile: ElementRef;

  // Inject service 
  constructor(private fileUploadService: FileUploadService, private sanitizer: DomSanitizer, private _service: MyserviceService) { }
  ngAfterViewInit(): void {


  }

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('FILE_URL_ARRAY-1'))) {
      this.FILEURL_ARRAY = JSON.parse(localStorage.getItem('FILE_URL_ARRAY-1'));
      console.log(this.FILEURL_ARRAY)
    }

    this._service.getAllEmployee().subscribe(res => {
      this.TOTAL_EMP = res
    })




    this._service.getEmployee().subscribe((res) => { this.TASK_EMP_ARRAY = res })

    const data = this.fileUrl;
    const blob = new Blob([data], {
      type: 'application/octet-stream'
    });
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));



  }


  // On file Select
  onChange(event, username) {
    this.file = event.target.files[0];

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        let temp = event.target.result;
        this.fileUrl = temp;
        console.log(this.fileUrl)

        let temob = {
          name: "",
          email: "",
          address: "",
          gPhone: "",
          empBank: "",
          accountNo: "",
          panNo: "",
          salary: "",
          joindate: "",
          leavedate: "",
          ppUrl: "",

          file_url: ""
        }


        let _actualUser = this.TOTAL_EMP.filter(obj => obj.fullname === username)
        console.log(_actualUser)
        for (let j = 0; j < _actualUser.length; j++) {
          temob.name = _actualUser[j].fullname;
          temob.email = _actualUser[j].email;
          temob.address = _actualUser[j].address;
          temob.gPhone = _actualUser[j].guardno;
          temob.empBank = _actualUser[j].bankname;
          temob.accountNo = _actualUser[j].accountno;
          temob.panNo = _actualUser[j].panno;
          temob.salary = _actualUser[j].salary;
          temob.joindate = _actualUser[j].joindate;
          temob.leavedate = _actualUser[j].expirydate;
          temob.ppUrl = _actualUser[j].pp_url;


        }


        temob.file_url = this.fileUrl;

        console.log(temob)
        let tempUser = this.FILEURL_ARRAY.filter(obj => obj.name == temob.name)
        let actualUser = tempUser.pop()
        console.log(actualUser)
        this.FILEURL_ARRAY.push(temob)

        console.log(this.FILEURL_ARRAY)
        localStorage.setItem('FILE_URL_ARRAY-1', JSON.stringify(this.FILEURL_ARRAY))







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

          this.loading = false;
          alert('Uploaded Successfully') // Flag variable 
        }
      }
    );

  }

  removeItem(index) {
    console.log('removeitem')
    this.FILEURL_ARRAY.splice(index, 1)
    console.log(this.FILEURL_ARRAY)
    localStorage.setItem('FILE_URL_ARRAY-1', JSON.stringify(this.FILEURL_ARRAY))
    if (JSON.parse(localStorage.getItem('FILE_URL_ARRAY-1'))) {
      this.FILEURL_ARRAY = JSON.parse(localStorage.getItem('FILE_URL_ARRAY-1'));
      console.log(this.FILEURL_ARRAY)
    }

  }
  cleartask(index){

  }

}
