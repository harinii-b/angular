import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'counter app';
  number = 0;

  increase() {
    this.number = this.number + 1;
  }

  decrease() {
    this.number = this.number - 1;
  }
}
