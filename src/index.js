import createContent from "./content";
import createMenu from "./menu";
createContent();
//tab area
const container = document.querySelector('.container');
const tabDiv = document.createElement('div');
const menuDiv = document.createElement('BUTTON');
const contentDiv = document.createElement('BUTTON');
menuDiv.textContent = "menu";
contentDiv.textContent = "content";
tabDiv.appendChild(menuDiv);
tabDiv.appendChild(contentDiv);
container.appendChild(tabDiv);

