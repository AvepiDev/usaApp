import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//Services Added manually
import { GetUsersService } from './services/get-users.service';
import { ActiveUserService } from './services/active-user.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginUserComponent } from './components/login-user/login-user.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { DashBoardComponent } from './components/dash-board/dash-board.component';

const appRoutes: Routes = [
  {path: '', component:LoginUserComponent},
  {path: 'dashboard', component:DashBoardComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginUserComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GetUsersService, ActiveUserService], //Add Services manually
  bootstrap: [AppComponent]
})
export class AppModule { }
