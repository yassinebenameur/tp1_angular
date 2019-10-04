import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../_models/personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  @Input() person: Person;

  constructor() {
  }

  ngOnInit() {
  }

}
