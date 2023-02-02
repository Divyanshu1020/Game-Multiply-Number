const random1 = Math.ceil(Math.random() * 10);
const random2 = Math.ceil(Math.random() * 10);
const answere = random1 * random2;


let question = document.getElementById("question")
let submit = document.getElementById("form")
let input = document.getElementById("input")
let scoreEl = document.getElementById("score")





let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;
}
scoreEl.textContent = `score: ${score}`
question.textContent = `What is ${random1} multiply by ${random2}?`
submit.addEventListener("submit", function(){
    const userAnswere = Number(input.value);
    if(userAnswere === answere){
        score++;
        upDateLocalStorage()
    }else{
        score--;
        upDateLocalStorage()
    }

})

function upDateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}
