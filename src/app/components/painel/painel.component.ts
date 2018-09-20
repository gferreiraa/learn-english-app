import { Component, OnInit } from '@angular/core';

import { Phrase } from './../shared/phrase.model';
import { Phrases } from './phrases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public phrases: Phrase[] = Phrases;
  constructor() { }

  ngOnInit() {
    console.log(this.phrases);
  }

}
