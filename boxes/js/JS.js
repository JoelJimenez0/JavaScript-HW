let colors = ['yellow', 'red', 'black', 'green','blue','purple','orange'];
let button = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
button.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementById('container');
    container.style.background = randomColor;
})

button2.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container2 = document.getElementById('container2');
    container2.style.background = randomColor;
})

button3.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container3 = document.getElementById('container3');
    container3.style.background = randomColor;
})