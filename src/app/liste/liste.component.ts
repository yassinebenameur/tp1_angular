import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Person} from '../_models/personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {


  personsList: Person[];
  selectedPerson: Person;
  @Output() personSelected = new EventEmitter<Person>();

  constructor() {
  }

  ngOnInit() {

    this.personsList = [
      new Person(1, 'Yassine', 'Ben Ameur', 21, 11097817, 'developer', 'rotating_card_profile2.png'),
      new Person(2, 'Khlil', 'Turki', 22, 8449849, 'developer', 'rotating_card_profile3.png')
    ];
  }

  onSelectedPerson(data) {
    this.selectedPerson = data;
    this.personSelected.emit(data);
  }

}
