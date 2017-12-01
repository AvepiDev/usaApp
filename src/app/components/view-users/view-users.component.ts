import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../../services/get-users.service';
import { User } from '../../models/loginUser';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  users: User[];
  editState: boolean = false;

  constructor(private getUsers: GetUsersService) { }

  ngOnInit() {
    this.users = this.getUsers.getSubscribe();
  }

  options(){
    this.editState = true;
  }

  deleteItem(u: User){
  }

}
