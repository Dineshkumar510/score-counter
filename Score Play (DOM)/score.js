var p1btn = document.querySelector("#p1btn");
var p2btn = document.querySelector("#p2btn");
var reset = document.querySelector("#reset");

var p1display  = document.querySelector("#p1display");
var p2display  = document.querySelector("#p2display");

var count = document.querySelector("#count");
var input1 = document.querySelector("#input1");

var p1score = 0;
var p2score = 0;

var  gameOver = false;
var  winningScore = 5; 



p1btn.addEventListener("click",function(){
       if (!gameOver) {
        p1score++;
       if (p1score === winningScore) {
           gameOver = true;
           p1display.classList.add("winner");
       } 
        p1display.textContent = p1score;
       }
});


p2btn.addEventListener("click",function(){
    if (!gameOver) {
     p2score++;
    if (p2score === winningScore) {
        gameOver = true;
        p2display.classList.add("winner");
    } 
     p2display.textContent = p2score;
    }
});


reset.addEventListener("click", function(){
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    count.textContent = 5;
    document.getElementById("input1").value = "";
   p1display.classList.remove("winner");
   p2display.classList.remove("winner");
   gameOver = false;
});


function reset1(){
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
   p1display.classList.remove("winner");
   p2display.classList.remove("winner");
   gameOver = false;
}

input1.addEventListener("change",function(){
 count.textContent = input1.value;
 winningScore = Number (input1.value);
 reset1();
});