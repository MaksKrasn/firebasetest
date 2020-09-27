import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebasetest';
  items = new Map<string, any>();

  constructor(private db: AngularFireDatabase){
    //let root = db.list('/people');
    /*root.push({
      firstname: 'Timur',
      lastname: 'Gajdar',
      age: 45
    })*/
    //let people = db.list('/people')
    //console.log(people);

    db.list('/people').snapshotChanges().subscribe(rez => {
      this.items.clear();
      rez.map(element => {
        this.items.set(element.key, element.payload.exportVal())
      })
    })

    console.log(this.items)
  }

}
