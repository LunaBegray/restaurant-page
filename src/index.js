import createContent from "./content";
import createMenu from "./menu";
createContent();
//tab area
// const body = document.querySelector('body');
const menuDiv = document.createElement('BUTTON');
const contentDiv = document.createElement('BUTTON');
menuDiv.textContent = "menu";
contentDiv.textContent = "content";
container.appendChild(menuDiv);
container.appendChild(contentDiv);
