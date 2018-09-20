import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit {
  public emptyHeart = './assets/coracao_vazio.png';
  public heartFull = './assets/coracao_cheio.png';

  constructor() { }

  ngOnInit() {
  }

}
