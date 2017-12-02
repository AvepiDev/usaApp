import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//Services Added manually
import { GetUsersService } from './services/get-users.service';
import { ActiveUserService } from './services/active-user.service';
import { GetadminService } from './services/getadmin.service';
import { AddOrderService } from './services/add-order.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginUserComponent } from './components/login-user/login-user.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { AddOrderComponent } from './components/add-order/add-order.component';

const appRoutes: Routes = [
  {path: '', component:LoginUserComponent}, //Change to LoginUserComponent
  {path: 'dashboard', component:DashBoardComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'adminDash', component:AdministrationComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginUserComponent,
    DashBoardComponent,
    AdminComponent,
    AdministrationComponent,
    AddUserComponent,
    ViewUsersComponent,
    AddOrderComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GetUsersService, ActiveUserService, GetadminService, AddOrderService], //Add Services manually
  bootstrap: [AppComponent]
})
export class AppModule { }
