import { Component, HostListener, Inject, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { DOCUMENT, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../assets/fontello/css/fontello.css']
})
export class HeaderComponent {

  dummyText: string;
  menuList: any;
  showMenu = false;
  isScrolled = false;
  constructor (@Inject(DOCUMENT) private document: any,
    @Inject(forwardRef(() => AppComponent)) app:AppComponent,
    ) {
      this.menuList = app.getMenuList();
      this.dummyText = app.getText();
    }

  @HostListener('window:scroll')
  onWindowScroll() {
    const number = this.document.body.scrollTop;
    if (number > 30) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  toggle() {
    this.showMenu = !this.showMenu;
  }
}
