
import { Component, OnInit } from '@angular/core';

import { Heart } from './../shared/heart.model';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit {
  public emptyHeart = './assets/coracao_vazio.png';
  public heartFull = './assets/coracao_cheio.png';

  public hearts: Heart[] = [
    new Heart(true), new Heart(true), new Heart(true)
  ];

  constructor() { }

  ngOnInit() {
  }

}
