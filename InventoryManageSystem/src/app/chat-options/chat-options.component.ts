import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChatServiceService } from '../Services/chat-service.service';
import { MatDialog } from '@angular/material/dialog'
import { MyserviceService } from '../Services/myservice.service';


@Component({
  selector: 'app-chat-options',
  templateUrl: './chat-options.component.html',
  styleUrls: ['./chat-options.component.css']
})
export class ChatOptionsComponent implements OnInit {
  @ViewChild('popup', { static: false }) popup: any;

  public roomId: string;
  public messageText: string;
  public messageArray: { user: string, message: string }[] = [];
  private storageArray = [];

  public showScreen = false;
  public phone: string;
  public currentUser;
  public selectedUser;
  public CurrentUserArray = []
  public userList :any = []

  // public userList = [
  //   {
  //     id: 1,
  //     name: 'Rewaaz Bhetwal',
  //     phone: '9876598765',
 
  //     roomId: {
  //       2: 'room-1',
  //       3: 'room-2',
  //       4: 'room-3'
  //     }
  //   },
  //   {
  //     id: 2,
  //     name: 'Ritesh Adhikari',
  //     phone: '9876543210',

  //     roomId: {
  //       1: 'room-1',
  //       3: 'room-4',
  //       4: 'room-5'
  //     }
  //   },
  //   {
  //     id: 3,
  //     name: 'Arjun Phuyel',
  //     phone: '9988776655',

  //     roomId: {
  //       1: 'room-2',
  //       2: 'room-4',
  //       4: 'room-6'
  //     }
  //   },
  //   {
  //     id: 4,
  //     name: 'Prajwal Timsina',
  //     phone: '9876556789',
   
  //     roomId: {
  //       1: 'room-3',
  //       2: 'room-5',
  //       3: 'room-6'
  //     }
  //   }
  // ];

  constructor(

    private chatService: ChatServiceService,private dialogRef: MatDialog
  ,private _service:MyserviceService) {
    
  this._service.chatuser().subscribe(res=>{this.userList = res;console.log(this.userList)})
  }

  ngOnInit(): void {

    this.currentUser = this.userList.find(user => user.email === this.phone.toString());
    this.userList = this.userList.filter((user) => user.phone !== this.phone.toString());
    console.log(this.userList)
    console.log(this.currentUser)
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
    this.CurrentUserArray.push(this.currentUser)
    localStorage.setItem('CurrentUserArray', JSON.stringify(this.CurrentUserArray))

    if (this.currentUser) {
      this.showScreen = true;
      localStorage.setItem('showscreen', String(this.showScreen))

    }













    // let CUSER = JSON.parse(localStorage.getItem('currentUser'))
    // console.log(CUSER)

    // this.CurrentUserArray = JSON.parse(localStorage.getItem('CurrentUserArray'))
    // console.log(this.CurrentUserArray)
    // if (this.CurrentUserArray) {
    //   this.currentUser = this.CurrentUserArray.filter((cUser) => cUser.phone === CUSER.phone);
    //   console.log(this.currentUser)
    // }


    // if (this.currentUser) {

    //   this.userList = this.userList.filter((user) => user.phone !== this.currentUser.phone);
    //   console.log(this.currentUser)
    //   for (let i = 0; i < this.currentUser.length; i++) {
    //     if (this.currentUser[i]) {
    //       this.showScreen = true;

    //     }
    //     else {
    //       this.showScreen = false;
    //     }

    //   }

    // }




    this.chatService.getMessage()
      .subscribe((data: { user: string, room: string, message: string }) => {
        // this.messageArray.push(data);
        if (this.roomId) {
          setTimeout(() => {
            this.storageArray = this.chatService.getStorage();
            const storeIndex = this.storageArray
              .findIndex((storage) => storage.roomId === this.roomId);
            this.messageArray = this.storageArray[storeIndex].chats;
          }, 500);
        }
      });
  }

  ngAfterViewInit(): void {


    // if (!this.showScreen) {
    //   this.openPopup(this.popup);
    // }

  }

  // openPopup(content: any): void {
  //   this.modalService.open(content, { backdrop: 'static', centered: true });
  // }



  selectUserHandler(phone: string): void {
    this.selectedUser = this.userList.find(user => user.phone === phone);
    this.roomId = this.selectedUser.roomId[this.currentUser.id];
    this.messageArray = [];

    this.storageArray = this.chatService.getStorage();
    const storeIndex = this.storageArray
      .findIndex((storage) => storage.roomId === this.roomId);

    if (storeIndex > -1) {
      this.messageArray = this.storageArray[storeIndex].chats;
    }

    this.join(this.currentUser.name, this.roomId);
  }

  join(username: string, roomId: string): void {
    this.chatService.joinRoom({ user: username, room: roomId });
  }

  sendMessage(): void {
    this.chatService.sendMessage({
      user: this.currentUser.name,
      room: this.roomId,
      message: this.messageText
    });

    this.storageArray = this.chatService.getStorage();
    const storeIndex = this.storageArray
      .findIndex((storage) => storage.roomId === this.roomId);

    if (storeIndex > -1) {
      this.storageArray[storeIndex].chats.push({
        user: this.currentUser.name,
        message: this.messageText
      });
    } else {
      const updateStorage = {
        roomId: this.roomId,
        chats: [{
          user: this.currentUser.name,
          message: this.messageText
        }]
      };

      this.storageArray.push(updateStorage);
    }

    this.chatService.setStorage(this.storageArray);
    this.messageText = '';
  }

  logoutuser() {
    if (confirm('Do you want to logout current chat?')) {
      this.showScreen = false;
      // this.openPopup(this.popup);
      localStorage.removeItem('currentUser')
    }

  }


}
