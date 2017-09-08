import { Component, Input } from '@angular/core';
import { CardList } from '../objects';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', '../../assets/fontello/css/fontello.css']
})
export class CardComponent {

  @Input() card_name: any;
  @Input() index: any;
  cards =  [
    {image: ''},
    {title: 'numbers', image: '../assets/img/number1.png', icon: 'icon-chart'},
    {title: 'upcoming event', image:'../assets/img/event.png', icon: 'icon-calendar', button: true},
    {title: 'case study', icon: 'icon-book', button: true},
    {image: '../assets/img/discover.jpg', button: true},
    {title: 'news', icon: 'icon-align-left', button: true},
    {title: 'blog', image: '../assets/img/blog.jpg', icon: 'icon-align-left', button: true},
    {image: '../assets/img/quote.jpg'},
    {title: 'product', icon: 'icon-mobile'},
    {title: 'numbers', image: '../assets/img/number2.png', icon: 'icon-chart'},
    {image: ''}
  ]

}
