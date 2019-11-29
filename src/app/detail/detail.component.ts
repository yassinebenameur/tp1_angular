import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../_models/personne';
import {EmbaucheService} from '../_services/embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  @Input() person: Person;

  constructor(private embaucheService: EmbaucheService) {
  }

  ngOnInit() {
  }

  embaucher() {
    this.embaucheService.embaucher(this.person);
  }

  details() {

  }
}
