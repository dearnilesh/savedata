import { Component } from '@angular/core';
import { CountService } from './count.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'uxtrendz';

  userCount!: number;
  adminCount!: number;



  constructor(private _countService: CountService) {
    this._countService.userCount.subscribe(res => {
      this.userCount = res;
    });
    this._countService.adminCount.subscribe(res => {
      this.adminCount = res;
    });
localStorage.setItem("users",JSON.stringify(this.users))
localStorage.setItem("admins",JSON.stringify(this.admins))
let localuser = localStorage.getItem("users")
let localadmin = localStorage.getItem("admins")

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  // for Users
  users : any = [];

  pushUsers(usersdata: string) {
    this.users.push(usersdata);

    localStorage.setItem("usersdata", JSON.stringify(this.users))
    let localuser = localStorage.getItem("usersdata")



  }
  onRemoveUsers(item: number) {
    this.users.splice(item, 2);
    this.userCount = this.userCount - 1;
    this._countService.userCount.next(this.userCount);
  }

  // for Admins
  admins: any  = [];
  pushAdmins(adminsdata: string) {
    this.admins.push(adminsdata);

    localStorage.setItem("adminsdata", JSON.stringify(this.admins))
    let localuser = localStorage.getItem("adminsdata")




  }
  onRemoveAdmins(item: number) {
    this.admins.splice(item, 1);
    this.adminCount = this.adminCount - 1;
    this._countService.adminCount.next(this.adminCount);
  }
  user:any;
  edit:any;
  onedit(){
this.user=this.edit;
  }
}
