import { Component, OnInit } from '@angular/core';
import { GetadminService } from '../../services/getadmin.service';
import { ActiveUserService } from '../../services/active-user.service';
import { Router } from '@angular/router';
import { Admin } from '../../models/admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin: Admin = {
    username: '',
    password: ''
  }

  admins: Admin[];
  access: boolean = false;

  constructor(private getAdmin: GetadminService, private activeUser: ActiveUserService, private router: Router) { }

  ngOnInit() {
    this.getAdmin.getAdmin().subscribe( users => {
      this.admins = users;
    });
  }

  verify(){
    if(this.admin.username != '' && this.admin.password != ''){
      this.admins.forEach(u => {
        if(u.username === this.admin.username && u.password === this.admin.password){
          this.access = true;
          this.activeUser.setAdminCredential(u.id,u.username);
          return true;
        }
      });
      if(this.access){
        window.alert("Welcome!");
        this.router.navigateByUrl('/adminDash');
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
