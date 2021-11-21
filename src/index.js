import { container } from "webpack";
import createContent from "./content";
import createMenu from "./menu";
createContent();
//tab area
const menuBtn = document.createElement('BUTTON');
const contentBtn = document.createElement('BUTTON');
menuBtn.textContent = "menu";
contentBtn.textContent = "content";
menuBtn.addEventListener('click', function(){
    container.textContent = "";
    createMenu();
});
contentBtn.addEventListener('click', function(){
    container.textContent = "";
    createContent();
});
container.appendChild(menuDiv);
container.appendChild(contentDiv);
