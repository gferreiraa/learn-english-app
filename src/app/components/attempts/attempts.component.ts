
import { Component, OnInit, Input } from '@angular/core';

import { Heart } from './../shared/heart.model';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit {

  @Input() public attempts: number;

  public hearts: Heart[] = [
    new Heart(true), new Heart(true), new Heart(true)
  ];

  constructor() { }

  ngOnInit() {
  }

}
