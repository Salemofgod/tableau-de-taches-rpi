import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TaskboardComponent from './view/taskboard-component.js';
import TaskListComponent from './view/tasklist-component.js';
import { render, RenderPosition } from './framework/render.js';

// Données des tâches (temporaires)
const tasksData = {
  'En Attente': ['Apprendre HTML', 'Pratiquer CSS', 'Comprendre Git'],
  'En Cours': ['Lire la doc JavaScript', 'Construire un mini projet'],
  'Terminées': ['Installer VS Code', 'Configurer GitHub'],
  'Corbeille': ['Regarder Netflix', 'Scroller Instagram']
};

const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.add-task');
const taskboardContainer = document.querySelector('.taskboard');

// Rendre l'en-tête
render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);

// Rendre le formulaire
render(new FormAddTaskComponent(), formContainer);

// Rendre le tableau de tâches
const taskboardComponent = new TaskboardComponent();
render(taskboardComponent, taskboardContainer);

// Rendre les 4 colonnes de tâches
const boardColumns = taskboardComponent.getElement().querySelector('.board-columns');
Object.entries(tasksData).forEach(([title, tasks]) => {
  render(new TaskListComponent(title, tasks), boardColumns);
});

console.log('Application chargée avec succès ! Tous les composants sont rendus.');
