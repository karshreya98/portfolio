import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  opened = true;
  mode = 'side';
  toggle() {
    this.opened = !this.opened;
  }
}
