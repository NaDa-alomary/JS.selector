//get element by id
const box = document.getElementById("box-1");
box.addEventListener("click", function (event){
    event.target.style.backgroundColor="rgb(60,2,78)";
    event.target.style.width="210px";
    event.target.style.height="160px";
    event.target.style.borderRadius="50%";

})

//get element by className
var boxes = document.getElementsByClassName("box-to-select");
for(const element of boxes) {
    element.addEventListener("click", function(event) {
        event.target.style.backgroundColor="rgb(91,200,117)";
        event.target.style.width="210px";
        event.target.style.height="160px";
        event.target.style.borderRadius="50%";
    });
}

//get element by querySelector
var queryBox5 = document.querySelector("#box-5");      // # هنا لااازم أضيف  id
queryBox5.addEventListener("click", function (event){
    event.target.style.backgroundColor="rgb(149,151,18)";
    event.target.style.width="210px";
    event.target.style.height="160px";
    event.target.style.borderRadius="50%";
})

//get element by querySelectorAll
var queryBoxes = document.querySelectorAll(".box-to-select-2");      // . هنا لااازم أضيف  class
for(const element of queryBoxes) {
    element.addEventListener("click", function(event) {
        event.target.style.backgroundColor="rgb(149,151,218)";
        event.target.style.width="210px";
        event.target.style.height="160px";
        event.target.style.borderRadius="50%";
    })
}
