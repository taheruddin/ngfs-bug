import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Expression} from './models/expression';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    xpnDoc: AngularFirestoreDocument<Expression>;
    xpn: Observable<Expression>;
    xpnCol: AngularFirestoreCollection<Expression>;
    xpns: Observable<Expression[]>;

    constructor(private afs: AngularFirestore) {
        this.xpnCol = this.afs.collection('expression');
        this.xpns = this.xpnCol.valueChanges();
        this.xpnDoc = this.afs.doc<Expression>('/expression/zx9RwDFOpgjIPmfQtLRN');
        this.xpn = this.xpnDoc.valueChanges();
    }

    ngOnInit() {
    }
}
