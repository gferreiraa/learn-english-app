import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

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

  @Output() public finalGame: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.returnAnswer();
   }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {

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
        this.finalGame.emit('vitoria');
      }
      // Refresh round
      this.returnAnswer();
    } else {
      this.tries--;
      if (this.tries === -1) {
        this.finalGame.emit('derrota');
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
