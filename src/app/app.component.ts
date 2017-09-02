import { Component } from '@angular/core';
import { Stats, FooterList } from './objects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './fontello/css/fontello.css']
})
export class AppComponent {
  stat_list = [
    new Stats('32m', 'students'),
    new Stats('66m', 'parents'),
    new Stats('100m', 'users'),
    new Stats('13,000', 'districts'),
  ];

  footer_list = [
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
}
