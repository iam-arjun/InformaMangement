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
  nameSearch: string = "Arjun Phuyel"
  tempFileUrl: any = []
  @ViewChild('file1') myfile: ElementRef;

  // Inject service 
  constructor(private fileUploadService: FileUploadService, private sanitizer: DomSanitizer, private _service: MyserviceService) { }
  ngAfterViewInit(): void {


  }

  ngOnInit(): void {
    let temp = JSON.parse(localStorage.getItem('FILE_URL_ARRAY'))
    console.log(temp)
    let set = new Set(temp)
    this.FILEURL_ARRAY = [...set];
    console.log(this.FILEURL_ARRAY)



    this._service.getEmployee().subscribe((res) => { this.TASK_EMP_ARRAY = res })
    const data = this.fileUrl;
    const blob = new Blob([data], {
      type: 'application/octet-stream'
    });
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));



  }


  // On file Select
  onChange(event) {
    this.file = event.target.files[0];

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        let temp = event.target.result;
        this.fileUrl = temp;

        let temob = {
          name:"",
          file_url:""
        }

        console.log('This is fileurl array')
        this.FILEURL_ARRAY.push(this.fileUrl)

        console.log(this.FILEURL_ARRAY)
        localStorage.setItem('FILE_URL_ARRAY', JSON.stringify(this.FILEURL_ARRAY))



      }

      reader.readAsDataURL(event.target.files[0]);
    }
    console.log(this.fileUrl)


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

  onUploadIMG() {

  }

}
