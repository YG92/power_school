export class Stats {
  constructor(
    public num: string,
    public title: string
  ) {}
}

export class FooterList {
  constructor(
    public title: string,
    public arrow: boolean
  ) {}
}

export class CardList {
  constructor(
    public id: string,
    public title: string,
    public image: string,
    public button: boolean,
    public icon: string
  ) {}
}

export class Options {
  constructor(
    public title: string,
    public photo1: string,
    public number1: {number: string, text: string},
    public event: {text: string, date: string},
    public case_study: string,
    public discover: string,
    public news: string,
    public blog: string,
    public quote: {'text': string, 'image': string, 'name': string, 'position': string},
    public product: string,
    public number2: {number: string, text: string},
    public photo2: string
  ) {}
}
