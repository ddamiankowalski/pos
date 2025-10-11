import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'pos-root',
  standalone: true,
  templateUrl: 'app.html',
  imports: [RouterOutlet],
})
export class App {
  protected title = 'pos-ui';
}
