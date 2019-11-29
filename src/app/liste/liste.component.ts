import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Person} from '../_models/personne';
import {CvService} from '../_services/cv.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {


  personsList: Person[];
  selectedPerson: Person;
  @Output() personSelected = new EventEmitter<Person>();

  constructor(private cvService: CvService) {
  }

  ngOnInit() {

    this.personsList = this.cvService.getCvList();
  }

  onSelectedPerson(data) {
    this.selectedPerson = data;
    this.personSelected.emit(data);
  }

}
