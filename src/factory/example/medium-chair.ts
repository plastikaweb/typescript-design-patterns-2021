import Chair from './chair';

export default class MediumChair extends Chair {
  constructor() {
    super();
    this.height = 80;
    this.width = 50;
    this.depth = 40;
  }
}
