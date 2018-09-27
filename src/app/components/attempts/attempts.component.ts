
import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { Heart } from './../shared/heart.model';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit, OnChanges {

  @Input() public attempts: number;

  public hearts: Heart[] = [
    new Heart(true), new Heart(true), new Heart(true)
  ];

  constructor() { }

  ngOnChanges() {
    if (this.attempts !== this.hearts.length) {
      const indexAttempts = this.hearts.length - this.attempts;
      this.hearts[indexAttempts - 1].full = false;
    }
  }

  ngOnInit() {
  }

}
