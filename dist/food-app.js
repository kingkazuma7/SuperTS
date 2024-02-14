"use strict";
class Score {
}
class Food {
    constructor(elemet) {
        this.elemet = elemet;
        elemet.addEventListener('click', this.clickHnader.bind(this));
    }
    clickHnader() {
        this.elemet.classList.toggle('food--active');
    }
}
class Foods {
    get activeElements() {
        this.elements.forEach(item => {
            if (item.classList.contains('food--active')) {
                this._activeElem.push(item);
            }
        });
        return this._activeElem;
    }
    constructor() {
        this.elements = document.querySelectorAll('.food');
        this._activeElem = [];
        this.elements.forEach(item => {
            new Food(item);
        });
    }
}
const foods = new Foods();
