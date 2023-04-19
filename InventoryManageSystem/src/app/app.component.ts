import { Component } from '@angular/core';
import { MyserviceService } from './Services/myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  title = 'InventoryManageSystem';
  show_login:boolean = false;
  show_user:boolean = false;
  show_admin_dash:boolean = false;

  showParty: boolean;
  showEmployee: boolean;
  constructor(private _service: MyserviceService) {
    this._service.showLogin.subscribe(res=>{this.show_login = res ;console.log(this.show_login);})
    this._service.showUser.subscribe(res=>{this.show_user = res})
   this._service.showAdmin.subscribe(res=>{this.show_admin_dash = res ;console.log(this.show_admin_dash)})
 
   }


   
  ngOnInit(): void {

  }
  
  



  showEmployDetails() {
    this._service.EMP_DETAILS.next(true)
    this._service.EMP_DETAILS.subscribe(res => { this.showEmployee = res })
    this._service.PARTIES_STATUS.next(false)

  }
  showEmploy() {
    this._service.PARTIES_STATUS.next(true)
    this._service.PARTIES_STATUS.subscribe(res => { this.showParty = res })
    this._service.EMP_DETAILS.next(false)
  }


}
