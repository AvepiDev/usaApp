import { Component, OnInit } from '@angular/core';
import { User } from '../../models/loginUser';
import { GetUsersService } from '../../services/get-users.service';
import { ActiveUserService } from '../../services/active-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  user: User ={
    email: '',
    password: ''
  }
  users: User[];
  access: boolean = false;

  constructor(private getUsersService: GetUsersService, private activeUser: ActiveUserService, private router: Router) { }

  ngOnInit() {
    this.getUsersService.getUsers().subscribe( users => {
      this.users = users;
    });
  }

  verify(){
    if(this.user.email != '' && this.user.password != ''){
      this.users.forEach(u => {
        if(u.email === this.user.email && u.password === this.user.password){
          this.access = true;
          this.activeUser.setCredential(u.id,u.email);
          return true;
        }
      });
      if(this.access){
        window.alert("Welcome!");
        this.router.navigateByUrl('/dashboard');
        this.reset();
      }else{
        window.alert("Incorrect Credentials");
        this.reset();
      }
    }else{
      window.alert("Missing credentials");
    }
  }

  reset(){
    this.access = false;
  }

}
