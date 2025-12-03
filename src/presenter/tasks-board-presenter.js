// src/presenter/tasks-board-presenter.js
import TaskListComponent from '../view/tasklist-component.js';
import TaskComponent from '../view/task-component.js';
import TaskBoardComponent from '../view/taskboard-component.js';
import { render } from '../framework/render.js';
import { StatusOrder } from '../const.js';

export default class TasksBoardPresenter {
  #boardContainer = null;
  #tasksModel = null;
  #taskBoardComponent = new TaskBoardComponent();
  #boardTasks = [];
  #taskListComponents = new Map();

  constructor({ boardContainer, tasksModel }) {
    this.#boardContainer = boardContainer;
    this.#tasksModel = tasksModel;
  }

  init() {
    this.#boardTasks = [...this.#tasksModel.getTasks()];
    
    // Rendre le tableau principal
    render(this.#taskBoardComponent, this.#boardContainer);
    
    // Rendre les 4 colonnes (listes de tâches)
    const boardColumns = this.#taskBoardComponent.getElement().querySelector('.board-columns');
    
    StatusOrder.forEach(status => {
      const tasksListComponent = new TaskListComponent(status);
      render(tasksListComponent, boardColumns);
      this.#taskListComponents.set(status, tasksListComponent);
      
      // Rendre les tâches pour cette colonne
      this.#renderTasksForStatus(status, tasksListComponent);
    });
    
    console.log('✓ Tableau de tâches initialisé avec', this.#boardTasks.length, 'tâches');
  }

  #renderTasksForStatus(status, tasksListComponent) {
    const tasksForStatus = this.#tasksModel.getTasksByStatus(status);
    const itemsList = tasksListComponent.getElement().querySelector('.items-list');
    
    // Vider la liste avant de rerendre
    if (itemsList) {
      itemsList.innerHTML = '';
      
      tasksForStatus.forEach(task => {
        const taskComponent = new TaskComponent({ task });
        render(taskComponent, itemsList);
      });
    }
  }
}
