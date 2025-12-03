import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import { render, RenderPosition } from './framework/render.js';

const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.add-task');

// Rendre l'en-tête
render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);

// Rendre le formulaire
render(new FormAddTaskComponent(), formContainer);

console.log('Application chargée avec succès !');
