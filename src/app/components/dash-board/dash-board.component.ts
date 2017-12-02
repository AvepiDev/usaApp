import { Component, OnInit } from '@angular/core';
import { ActiveUserService } from '../../services/active-user.service';
import { Router } from '@angular/router';
import { User } from '../../models/loginUser';
import { Order } from '../../models/order';
import { AddOrderService } from '../../services/add-order.service'

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
  orders: Order[] = [];

  constructor(private activeUser: ActiveUserService, private router: Router, private addOrderService: AddOrderService) { }

  ngOnInit() {
    if(this.activeUser.getCredential() == undefined) {
      this.router.navigateByUrl('');
    }else{
      this.getOrders();
      this.user = this.activeUser.getCredential();
    }
  }

  getOrders(){
    this.addOrderService.getOrders().subscribe(items => {
      items.forEach(o => {
        if(o.client == this.user.id){
          this.orders.push(o);
        }
      });
    });
  }

}
