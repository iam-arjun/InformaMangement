import { Component, OnInit } from '@angular/core';

import { Time } from '@angular/common';
import { MyserviceService } from 'src/app/Services/myservice.service';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.css']
})
export class ContractDetailsComponent implements OnInit {
  Contract_Details:any = []
  namesearch:string  = ".._arju_.."
join:any;
expire:any;
Time:any;
days:any;
Days:any= [
 
 
]

  constructor(private _service:MyserviceService) { }

  ngOnInit() {
    this._service.getAllEmployee().subscribe(res=>{this.Contract_Details = res
    
    for(let i=0;i<this.Contract_Details.length;i++){

       this.join = new Date(this.Contract_Details[i].joindate);
       this.expire = new Date(this.Contract_Details[i].expirydate)
       this.Time = this.expire.getTime() - this.join.getTime();
this.days = this.Time/(1000*24*3600)
       console.log(this.days)
       this.Days.push(this.days)


      console.log(this.join)
      console.log(this.expire)
    }
    
    
    })

    

  }

}
