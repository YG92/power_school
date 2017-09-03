import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT, BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../fontello/css/fontello.css']
})
export class HeaderComponent {

  menu = false;
  isScrolled = false;
  constructor (@Inject(DOCUMENT) private document: any) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    const number = this.document.body.scrollTop;
    if (number > 30) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  menuClicked() {
    this.menu = true;
  }

}
