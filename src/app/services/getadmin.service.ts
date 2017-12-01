import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Admin } from '../models/admin';

@Injectable()
export class GetadminService {
  userCollection: AngularFirestoreCollection<Admin>;
  users: Observable<Admin[]>;
  userDoc: AngularFirestoreDocument<Admin>;

  constructor(public afs: AngularFirestore) { 
    this.userCollection = this.afs.collection('admin');
    this.users = this.userCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Admin;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getAdmin(){
    return this.users;
  }

}
