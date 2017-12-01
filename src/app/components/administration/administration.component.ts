import { Component, OnInit } from '@angular/core';
import { ActiveUserService } from '../../services/active-user.service';
import { Admin } from '../../models/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  isCollapsed = false;
  admin: Admin = {
    id: '',
    username: 'NO USER',
    password: ''
  }
  template: number = 0;

  constructor(private activeUser: ActiveUserService, private router: Router) { }

  ngOnInit() {
    if(this.activeUser.getAdminCredential() == undefined) {
      this.router.navigateByUrl('admin');
    }else{
      this.admin = this.activeUser.getAdminCredential();
    }
  }

}
