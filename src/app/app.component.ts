import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebasetest';

  constructor(private db: AngularFireDatabase){
    //let root = db.list('/people');
    /*root.push({
      firstname: 'Fedja',
      lastname: 'Pupkin',
      age: 22
    })*/
    let people = db.list('/people')
    console.log(people);

  }

}
