//первое задание
const Buttons = document.querySelectorAll("button.btn");

Buttons.forEach(function (button) {
    button.addEventListener("click", () => {
        console.log("вы нажали на кнопку");
    });
});
//второе задание
const counter = document.querySelector('.counter')
const num1 = document.querySelector('.btn1')
const num2 = document.querySelector('.btn2')
function btn1 (){
    counter.innerHTML--
}
function btn2 (){
    counter.innerHTML++
}
num1.addEventListener('click',btn1)
num2.addEventListener('click',btn2)