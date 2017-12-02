import { Component, OnInit } from '@angular/core';
import { User } from '../../models/loginUser';
import { GetUsersService } from '../../services/get-users.service';
import { Order } from '../../models/order';
import { AddOrderService } from '../../services/add-order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  users: User[];
  userFound: boolean = false;
  //Interfaces
  user: User = {
    id: '',
    email: '',
    password: 'data_protected'
  }
  order: Order = {
    client: '',
    date: '',
    lot: '',
    plts: '',
    desc: '',
    rate: 0
  }

  constructor(private getUsersService: GetUsersService, private addOrderService: AddOrderService) { }

  ngOnInit() {
    this.getData();
    /*
    this.getUsersService.getUsers().subscribe(items => {
      this.users = items;
      this.ready = true;
    });
    */
  }

  getData(){
    this.users = this.getUsersService.getSubscribe();
  }

  change(){
    this.userFound = false;
    this.user.id = '';
    this.user.email = '';
  }

  search(){
    this.users.forEach(e => {
      if(e.email === this.user.email){
        this.user.id = e.id;
        this.order.client = this.user.id;
        this.userFound = true;
      }
    });
    if(!this.userFound){
      window.alert("User not Found");
    }
  }

  setOrder(){
    if(this.order.date != '' && this.order.lot != '' && this.order.plts != '' && this.order.desc != '' && this.order.rate != 0){
      this.addOrderService.addOrder(this.order);
      window.alert("New Order Added");
      this.order.date = '';
      this.order.lot = '';
      this.order.plts = '';
      this.order.desc = '';
      this.order.rate = 0;
    }else{
      window.alert("Missing Fields");
    }
  }

}
