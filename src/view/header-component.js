import { createElement } from '../framework/render.js';

function createHeaderComponentTemplate() {
  return (
    `<header class="board-app__header">
      <div class="board-app__inner">
        <h1>Tableau de Tâches - Bounzeky Gnanga Fannelle Salem</h1>
      </div>
    </header>`
  );
}

export default class HeaderComponent {
  constructor() {
    this.element = null;
  }

  getTemplate() {
    return createHeaderComponentTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
