import { Component, HostListener, Inject} from '@angular/core';
import { DOCUMENT, BrowserModule } from '@angular/platform-browser';
import { Stats, FooterList, CardList, Options } from './objects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../assets/fontello/css/fontello.css']
})

export class AppComponent {

  currentOption: any;
  constructor (@Inject(DOCUMENT) private document: any) {
    this.currentOption = this.options[0]
  }


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
    new CardList('case_study', 'case study', '', true, 'icon-book'),
    new CardList('discover', '', '../assets/img/discover.jpg', true, ''),
    new CardList('news', 'news', '', true, 'icon-align-left'),
    new CardList('blog', 'blog', '../assets/img/blog.jpg', true, 'icon-align-left'),
    new CardList('quote', '', '../assets/img/quote.jpg', false, ''),
    new CardList('product', 'product', '', false, 'icon-mobile'),
    new CardList('number2', 'numbers', '../assets/img/number2.png', false, 'icon-chart'),
    new CardList('photo2', '', '../assets/img/children.png', false, ''),
  ]

  options = [
    new Options(
      'Education',
      '../assets/img/girl.jpg',
      {number: '5k+', text: 'districts using PowerSchool'},
      {text: 'eFinancePLUS Customer Training Webinars', date: 'september 13, 2017'},
      'Southampton County PS Prepares Students for End-of-year...',
      'Discover our unified classroom',
      'PowerSchool Acquired SunGuard K-12',
      'The New Digital Divide: Teacher Effectiveness',
      {'text': `"PowerSchool has helped move our district forward in the world of
      communication through technology. Our teachers have incredible and useful
      classroom management tools….Our parents and students love the real-time
      access to their grades and attendance."`,
      'name': 'CHRIS хуис GUERRERA',
      'image': '../../assets/img/Home-Portrait-Male1.jpg',
      'position': 'Hamilton Township School District, NJ'},
      'PowerSchool Mobile',
      {number: '100M', text: 'users for our solutions worldwide'},
      '../assets/img/children.png',
    ),
    new Options(
      'Technology Directors',
      '../assets/img/tech1.png',
      {number: '5k', text: 'lorem ipsum'},
      {text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit', date: 'lorem ipsum'},
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      {'text': `"OnSIS reporting is really easy with PowerSchool.
      As long as the data that's gone into the system is right on our end,
      it's a simple matter of clicking a couple of buttons to run the
      report and send it up to the Ministry."`,
      'name': 'ERIN ROWSELL',
      'image': '../../assets/img/erin.jpg',
      'position': `OnSIS/Student Data Supervisor,
      Trillim Lakelands District School Board, ON`},
      'lorem ipsum',
      {number: '100', text: 'lorem ipsum'},
      '../assets/img/tech2.jpg'
    ),
    new Options(
      'Administrators',
      '../assets/img/children.png',
      {number: '5k', text: 'lorem ipsum'},
      {text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit', date: 'lorem ipsum'},
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      {'text': `"We have more information at the touch of a mouse
      than we ever dreamed of and were ever able to collect before.
      They key here is the impact on our organization as a whole."`,
      'name': 'BILL GLOVER',
      'image': '../../assets/img/bill.jpg',
      'position': 'Chief Information Officer, Archdiocese of Baltimore, MD'},
      'lorem ipsum',
      {number: '100', text: 'lorem ipsum'},
      '../assets/img/girl.jpg'
    ),
    new Options(
      'Curriculum Directors',
      '../assets/img/children.png',
      {number: '5k', text: 'lorem ipsum'},
      {text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit', date: 'lorem ipsum'},
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      {'text': `"Kids rarely get feedback on their benchmark scores.
      The PowerSchool Assessment student profile connected it for them."`,
      'name': 'DEANNA DUNN',
      'image': '../../assets/img/dina.jpg',
      'position': 'Data Management Coach, Jane H Bryan Elementary School, VA'},
      'lorem ipsum',
      {number: '100', text: 'lorem ipsum'},
      '../assets/img/girl.jpg'
    ),
    new Options(
      'Teachers',
      '../assets/img/children.png',
      {number: '5k', text: 'lorem ipsum'},
      {text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      date: 'lorem ipsum'},
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      {'text': `"I love PowerTeacher Pro! It shows me information
       I never had before and now it is literally at my fingertips
       on my tablet device. I am able to focus efficiently on
       exactly what students need for individual paced learning."`,
      'name': 'ELIZABETH KADLE',
      'image': '../../assets/img/liza.jpg',
      'position': 'Teacher, Fieldbrook Elementary School, CA'},
      'lorem ipsum',
      {number: '100', text: 'lorem ipsum'},
      '../assets/img/girl.jpg'
    ),
    new Options(
      'Students & Parents',
      '../assets/img/girl.jpg',
      {number: '5k', text: 'lorem ipsum'},
      {text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit', date: 'lorem ipsum'},
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      {'text': `"Because of the PowerSchool app, my son saw that
      he received a zero for an assignment that he had turned in
      that day. That's when he remembered that he forgot to put
       his name on the assignment."`,
      'name': 'TONY NEWMAN',
      'image': '../../assets/img/tony.jpg',
      'position': 'Assistant Superintendent, Ramona Unified School District, CA, NJ'},
      'lorem ipsum',
      {number: '100', text: 'lorem ipsum'},
      '../assets/img/children.png'
    )
  ]

  transparent = false;


  @HostListener('window:scroll')
  onWindowScroll() {
    const number = this.document.body.scrollTop;

    if (number > 30) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
    if (this.animate == false) {
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

  getCurrentOption(option) {
    this.currentOption = option;
    if (this.transparent == false) {
      this.transparent = true;
      setTimeout(() => this.transparent = false, 1000)
    }
  }
}
