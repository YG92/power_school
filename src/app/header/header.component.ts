import { Component, Inject, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../assets/fontello/css/fontello.css']
})
export class HeaderComponent {

  @Input() isScrolled: boolean;
  @Input() menuList: any;
  @Input() dummyText: boolean;
  showMenu: any;

  toggle() {
    this.showMenu = !this.showMenu;
  }

}
