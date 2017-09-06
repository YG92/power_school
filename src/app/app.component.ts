import { Component, HostListener, Inject} from '@angular/core';
import { DOCUMENT, BrowserModule } from '@angular/platform-browser';
import { Stats, FooterList, CardList } from './objects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../assets/fontello/css/fontello.css']
})

export class AppComponent {

  constructor (@Inject(DOCUMENT) private document: any) {}

  active: string;
  animate = false;
  isScrolled: any;
  showText = false;
  dummyText = `
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
  commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
  magnis dis parturient montes, nascetur ridiculus mus.
  `
  stat_list = [
    new Stats('32m', 'students'),
    new Stats('66m', 'parents'),
    new Stats('100m', 'users'),
    new Stats('13,000', 'districts'),
  ];

  menuList = [
    new FooterList('Solutions', true),
    new FooterList('K-12 Impact', true),
    new FooterList('Community', false),
    new FooterList('Resources', true),
    new FooterList('Company', true),
    new FooterList('Get Started', false),
  ]

  socials = [
    'icon-twitter',
    'icon-facebook',
    'icon-linkedin',
    'icon-youtube-play',
    'icon-gplus'
  ]

  cards =  [
    new CardList('photo1', '', '../assets/img/girl.jpg', false, ''),
    new CardList('number1', 'numbers', '../assets/img/number1.png', false, 'icon-chart'),
    new CardList('event', 'upcoming event', '../assets/img/event.png', true, 'icon-calendar'),
    new CardList('case', 'case study', '', true, 'icon-book'),
    new CardList('discover', '', '../assets/img/discover.jpg', true, ''),
    new CardList('news', 'news', '', true, 'icon-align-left'),
    new CardList('blog', 'blog', '../assets/img/blog.jpg', true, 'icon-align-left'),
    new CardList('quote', '', '../assets/img/quote.jpg', false, ''),
    new CardList('product', 'product', '', false, 'icon-mobile'),
    new CardList('number2', 'numbers', '../assets/img/number2.png', false, 'icon-chart'),
    new CardList('photo2', '', '../assets/img/children.png', false, ''),
  ]

  @HostListener('window:scroll')
  onWindowScroll() {
    const number = this.document.body.scrollTop;

    if (number > 30) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
    if (!this.animate) {
      this.animate = true;
      setTimeout(() => this.animate = false, 1000)
    }
  }

  toggle() {
    this.showText = !this.showText;
  }

  getActive(active) {
    this.active = active;
  }
}
