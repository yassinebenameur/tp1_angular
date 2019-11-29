import {Component, OnInit} from '@angular/core';
import {CvService} from '../_services/cv.service';
import {ActivatedRoute} from '@angular/router';
import {Person} from '../_models/personne';

@Component({
  selector: 'app-cv-details',
  templateUrl: './cv-details.component.html',
  styleUrls: ['./cv-details.component.css']
})
export class CvDetailsComponent implements OnInit {
  idPerson: string;
  person: Person;

  constructor(private cvService: CvService, private route: ActivatedRoute) {
    this.idPerson = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.person = this.cvService.getCvById(this.idPerson);
    console.log(this.person);
  }

  onDeleteCv() {
   // this.cvService.deleteCv(id);
  }

}
