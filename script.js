var counter = 9;
var counter2 = 12;
var counter3 = 9;

var likeChanger = document.querySelector("#likes")
var likeChanger2 = document.querySelector(".likes2")
var likeChanger3 = document.querySelector(".likes3")

function pressedLike(){
    counter++;
    likeChanger.innerText = counter + " like(s)";
}

function pressedLike2(){
    counter2++;
    likeChanger2.innerText = counter2 + " like(s)";
}
function pressedLike3(){
    counter3++;
    likeChanger3.innerText = counter3 + " like(s)";
}