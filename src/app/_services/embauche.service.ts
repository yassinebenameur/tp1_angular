import {Injectable} from '@angular/core';
import {Person} from '../_models/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  constructor() {
  }

  listeEmbauche = [];

  embaucher(person: Person) {
    this.listeEmbauche.push(person);
    console.log('embauché');
    console.log(person);
    alert(person.firstName + ' ' + person.lastName + ' est embauché');
  }

  getListeEmbauches(): Person[] {
    console.log(this.listeEmbauche);
    return this.listeEmbauche;

  }
}
