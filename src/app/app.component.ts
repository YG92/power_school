import { Component } from '@angular/core';
import { Stats, FooterList } from './objects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './fontello/css/fontello.css']
})

export class AppComponent {

  dummyText = `
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
  commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
  magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
  ultrici es nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
  quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
  arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
  dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
  elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
  porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
  in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius.
  `
  stat_list = [
    new Stats('32m', 'students'),
    new Stats('66m', 'parents'),
    new Stats('100m', 'users'),
    new Stats('13,000', 'districts'),
  ];

  menu_list = [
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

  getMenuList() {
    return this.menu_list;
  }

  getText() {
    return this.dummyText;
  }
}
