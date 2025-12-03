import { createElement } from '../framework/render.js';
import TaskListComponent from './tasklist-component.js';

function createTaskboardComponentTemplate() {
  return (
    `<section class="taskboard">
      <div class="board-columns">
        <!-- Les colonnes seront ajoutées dynamiquement -->
      </div>
    </section>`
  );
}

export default class TaskboardComponent {
  constructor() {
    this.element = null;
  }

  getTemplate() {
    return createTaskboardComponentTemplate();
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
