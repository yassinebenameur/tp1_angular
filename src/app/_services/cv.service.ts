import {Injectable} from '@angular/core';
import {Person} from '../_models/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor() {
  }

  persons = [
    new Person(1, 'Yassine', 'Ben Ameur', 21, 11097817, 'developer', 'rotating_card_profile2.png'),
    new Person(2, 'Khlil', 'Turki', 22, 8449849, 'developer', 'rotating_card_profile3.png')
  ];

  getCvList(): Person[] {
    return this.persons;
  }

  getCvById(id: any): Person {

    return this.persons.find(elt => elt.id.toString() === id);
  }

  deleteCv(id: any) {
    // return this.persons.splice()
  }
}
