import createContent from "./content";
import createMenu from "./menu";
//tabs area
const container = document.querySelector('.container');
const tabDiv = document.createElement("div");
const tabContent = document.createElement("BUTTON");
const tabMenu = document.createElement("BUTTON");
tabContent.textContent = "Content";
tabMenu.textContent = "Menu";
tabDiv.appendChild(tabContent);
tabDiv.appendChild(tabMenu);
container.appendChild(tabDiv); 