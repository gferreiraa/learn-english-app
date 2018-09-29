import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public gameInProgress = true;
  public finish: string;
  public finalGame(tipo: string): void {
  this.gameInProgress = false;
  this.finish = tipo;
  }
  public restartGame(): void {
    this.gameInProgress = true;
    this.finish = undefined;
  }
}
