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
  public instruction = 'Traduza a frase:';
  public answer: string;

  public round = 0;
  public roundPhrase: Phrase;

  public progress = 0;

  constructor() {
    this.roundPhrase = this.phrases[this.round];
   }

  ngOnInit() {
    console.log(this.phrases);
  }

  public refreshAnswer( answer: Event): void {
    this.answer = (<HTMLInputElement>answer.target).value;
  }

  public checkAnswer(): void {
    if( this.roundPhrase.phrasePtBr == this.answer){
      alert('Tradução Ok!');
      // Change answer round
      this.round++;
      // Progress
      this.progress = this.progress + (100 / this.phrases.length);
      // Refresh round
      this.roundPhrase = this.phrases[this.round];
      console.log(this.roundPhrase);
    }else{
      alert('Translate Incorret!');
    }


  }

}
