import { Component, OnInit } from '@angular/core';
import { ActiveUserService } from '../../services/active-user.service';
import { Router } from '@angular/router';
import { User } from '../../models/loginUser';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  //Declare no user elemnt to avoid undefined
  user: User = {
    id: '',
    email: 'NO USER',
    password: ''
  };

  constructor(private activeUser: ActiveUserService, private router: Router) { }

  ngOnInit() {
    if(this.activeUser.getCredential() == undefined) {
      this.router.navigateByUrl('');
    }else{
      this.user = this.activeUser.getCredential();
    }
  }

}
