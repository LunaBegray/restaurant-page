import createContent from "./content";
import createMenu from "./menu";
createContent();
//tab area


const createBtn = function(){
    const menuBtn = document.createElement('BUTTON');
    const contentBtn = document.createElement('BUTTON');
    menuBtn.textContent = "menu";
    contentBtn.textContent = "content";
    menuBtn.addEventListener('click', function(){
        console.log("meny button clicked");
        container.textContent = "";
        createMenu();
        createBtn();
    });
    contentBtn.addEventListener('click', function(){
        console.log("content button clicked");
        container.textContent = "";
        createContent();
        createBtn();
    });
    container.appendChild(menuBtn);
    container.appendChild(contentBtn);
}

const menuBtn = document.createElement('BUTTON');
const contentBtn = document.createElement('BUTTON');
menuBtn.textContent = "menu";
contentBtn.textContent = "content";
menuBtn.addEventListener('click', function(){
    console.log("meny button clicked");
    container.textContent = "";
    createMenu();
    createBtn();
});
contentBtn.addEventListener('click', function(){
    console.log("content button clicked");
    container.textContent = "";
    createContent();
    createBtn();
});
container.appendChild(menuBtn);
container.appendChild(contentBtn);