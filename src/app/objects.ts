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
