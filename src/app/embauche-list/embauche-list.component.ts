import {Component, OnInit} from '@angular/core';
import {Person} from '../_models/personne';
import {EmbaucheService} from '../_services/embauche.service';

@Component({
  selector: 'app-embauche-list',
  templateUrl: './embauche-list.component.html',
  styleUrls: ['./embauche-list.component.css']
})
export class EmbaucheListComponent implements OnInit {
  embaucheList: Person[];

  constructor(private embaucheService: EmbaucheService) {
  }

  ngOnInit() {
    this.embaucheList = this.embaucheService.getListeEmbauches();
  }

}
