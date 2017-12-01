import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../../services/get-users.service';
import { User } from '../../models/loginUser';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User = {
    email: '',
    password: ''
  }

  constructor(private getUsers: GetUsersService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.user.email !='' && this.user.password !=''){
      this.getUsers.addUser(this.user);
      window.alert("Add: "+"["+this.user.email+"]");
      this.reset();
    }else{
      window.alert("Empty Fields");
    }
  }

  reset(){
    this.user.email = '';
    this.user.password = '';
  }

}
