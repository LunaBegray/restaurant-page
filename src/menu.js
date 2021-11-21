console.log("menu tab loaded");
const createMenu = function(){
    const container = document.querySelector("#container");
    //headline
    const headlineDiv = document.createElement("div");
    headlineDiv.textContent = "luna's restaurant's menu";
    container.appendChild(headlineDiv);
    //menu
    const menuDiv = document.createElement("div");
    const pizzaDiv = document.createElement("div");
    pizzaDiv.textContent = "epic pinapple pizza for 3 dollars";
    menuDiv.appendChild(pizzaDiv);
    const burgerDiv = document.createElement("div");
    burgerDiv.textContent = "crabby pattie for 6.9 dollars";
    menuDiv.appendChild(burgerDiv);
    const sushiDiv = document.createElement("div");
    sushiDiv.textContent = "anime sushi, 9 dollars oni-chan please";
    menuDiv.appendChild(sushiDiv);
    container.appendChild(menuDiv);
};
export default createMenu;