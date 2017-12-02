import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from '../models/loginUser';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class GetUsersService {
  userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  userDoc: AngularFirestoreDocument<User>;

  subscribeItems: User[];

  constructor(public afs: AngularFirestore) { 

    this.userCollection = this.afs.collection('users');
    this.users = this.userCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User;
        data.id = a.payload.doc.id;
        return data;
      });
    });

    //Make preSubscribe to get items
    this.users.subscribe(items => {
      this.subscribeItems = items;
    });
  }

  deleteUser(u: User){
    this.userDoc = this.afs.doc('users/'+u.id);
    this.userDoc.delete();
  }

  //Get the preSubscribe from the Service
  getSubscribe(): User[]{
    return this.subscribeItems;
  }

  getUsers(){
    return this.users;
  }

  addUser(u: User){
    this.userCollection.add(u);
  }

}
