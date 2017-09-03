import { Component, EventEmitter, Output, Input } from '@angular/core';
import { AppComponent } from '../../app.component'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css', '../../../assets/fontello/css/fontello.css']
})
export class MenuComponent {
  @Input() var: string;
}
