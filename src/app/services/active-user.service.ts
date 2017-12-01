import { Injectable } from '@angular/core';
import { User } from '../models/loginUser';
import { Admin } from '../models/admin';

@Injectable()
export class ActiveUserService {
  ActiveUser: User = {
    id: '',
    email: '',
    password: ''
  }
  ActiveAdmin: Admin = {
    id: '',
    username: '',
    password: ''
  }

  constructor() { }

  setCredential(i: string, e: string){
    this.ActiveUser.id = i;
    this.ActiveUser.email = e;
  }

  getCredential(){
    if(this.ActiveUser.id != '' && this.ActiveUser.email != ''){
      return this.ActiveUser;
    }else{
      console.log("Error: No activeUser");
    }
  }

  setAdminCredential(i: string, u: string){
    this.ActiveAdmin.id = i;
    this.ActiveAdmin.username = u;
  }
  getAdminCredential(){
    if(this.ActiveAdmin.id != '' && this.ActiveAdmin.username != ''){
      return this.ActiveAdmin;
    }else{
      console.log("Error: No activeAdmin");
    }
  }

}
