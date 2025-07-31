// const box = document.getElementById('box');
// const generateButton = document.getElementById('generate');

// const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6', '#1ABC9C', '#E74C3C'];

// generateButton.addEventListener('click', () => {
//     let randomColor = '';

//     for (let i = 0; i < colors.length; i++) {
//         const randomIndex = Math.floor(Math.random() * colors.length);
//         randomColor = colors[randomIndex];
//         break; 
//     }

//     box.style.backgroundColor = randomColor;
// });



//insert required data in element using innerhtml or innertext


let box = document.querySelector('.box');
let getbtn = document.querySelector('.btn');
let stopbtn = document.querySelector('.stop-btn');
let colors = ['red', 'green', 'blue', 'pink', 'purple', 'grey', 'yellow', 'orange', 'brown', 'black'];
let intervalId;
function randomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
getbtn.addEventListener('click', function() {
    intervalId = setInterval(function() {
        let color = randomColor();
        box.style.backgroundColor = color;
    }, 500);
});
stopbtn.addEventListener('click', function() {
    if(!intervalId) {
        alert("No color change is currently happening.");
        return;
    }
    clearInterval(intervalId);
});
