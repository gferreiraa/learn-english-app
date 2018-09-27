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
  public answer = '';

  public round = 0;
  public roundPhrase: Phrase;

  public progress = 0;

  public tries = 3;

  constructor() {
    this.returnAnswer();
   }

  ngOnInit() {
  }

  public refreshAnswer( answer: Event): void {
    this.answer = (<HTMLInputElement>answer.target).value;
  }

  public checkAnswer(): void {
    if ( this.roundPhrase.phrasePtBr === this.answer) {
      alert('Tradução Ok!');
      // Change answer round
      this.round++;
      // Progress
      this.progress = this.progress + (100 / this.phrases.length);
      // Check
      if (this.round === 4) {
        alert('Você conclui as traduções com sucesso!');
      }
      // Refresh round
      this.returnAnswer();
    } else {
      this.tries--;
      if (this.tries === -1) {
        alert('Translate Incorret!');
      }
    }
  }
  public returnAnswer(): void {
    // Define the return based on logic
    this.roundPhrase = this.phrases[this.round];
    // Clear answer
    this.answer = '';
  }
}
