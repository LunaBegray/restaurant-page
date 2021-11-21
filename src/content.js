console.log("content tab loaded");
const createContent = function(){
    const container = document.querySelector("#container");
    //headline
    const headlineDiv = document.createElement("div");
    headlineDiv.textContent = "luna's restaurant";
    container.appendChild(headlineDiv);
    //image
    const img = document.createElement('IMG');
    img.src = "./myImg.jpeg";
    container.appendChild(img);
    //review
    const review = document.createElement("div");
    review.textContent = "this restaurant is pretty good! The food is so good I dance on the table with spongebob"; //lol
    container.appendChild(review);
}
export default createContent;
