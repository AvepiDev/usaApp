import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { Order } from '../models/order';

@Injectable()
export class AddOrderService {
  orderCollection: AngularFirestoreCollection<Order>;
  orders: Observable<Order[]>;
  orderDoc: AngularFirestoreDocument<Order>;

  subscribeItems: Order[];

  constructor(public afs: AngularFirestore) {
    this.orderCollection = this.afs.collection('orders');
    this.orders = this.orderCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Order;
        data.id = a.payload.doc.id;
        return data;
      });
    });

    //Make preSubscribe to get items
    this.orders.subscribe(items => {
      this.subscribeItems = items;
    });
   }

   deleteOrder(o: Order){
    this.orderDoc = this.afs.doc('orders/'+o.id);
    this.orderDoc.delete();
  }

  //Get the preSubscribe from the Service
  getSubscribe(): Order[]{
    return this.subscribeItems;
  }

  getOrders(){
    return this.orders;
  }

  addOrder(o: Order){
    this.orderCollection.add(o);
  }

}
