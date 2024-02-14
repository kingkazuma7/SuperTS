class Score { }
class Food {
  constructor(public elemet: HTMLDivElement) {
    elemet.addEventListener('click', this.clickHnader.bind(this));
  }
  clickHnader() {
    this.elemet.classList.toggle('food--active');
  }
}
class Foods {
  elements = document.querySelectorAll<HTMLDivElement>('.food');
  private _activeElem: HTMLDivElement[] = [];
  get activeElements() {
    this.elements.forEach(item => {
      if (item.classList.contains('food--active')) {
        this._activeElem.push(item);
      }
    });
    return this._activeElem;
  }
  constructor() {
    this.elements.forEach(item => {
      new Food(item);
    });
  }
}
const foods = new Foods();