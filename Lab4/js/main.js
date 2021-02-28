/*Таск №10*/ 
/* function openWindow() {
    var newWindow = window.open("about:blank", "empty", "height=600, width=300;");
    newWindow.document.write("Завдання №10"+"\nНове вікно !");
    setTimeout(function() {newWindow.close()}, 3000);
}
*/

 //Таск №6 
var clickCount = 0;
var update = document.getElementById('update');

document.getElementById('button').onclick = function() {
    clickCount++;
    if(clickCount===1) {
        update.innerHTML = 'Дарій Гиряк';
    } else if(clickCount===2) {
        update.innerHTML = 'Ви вже дізнались імя та прізвище !';
    } else if(clickCount===3){ 
      closeText();
    }
};
function closeText() {
    setTimeout(function() {
        let p = document.getElementById("update");
    p.close()}, 3000);
}

function calculateFibo(){
    var i;
    var fib = []; 

    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; i <= 10; i++) {
       fib[i] = fib[i - 2] + fib[i - 1];
       console.log(fib[i]);
    }
    let p = document.getElementById("rootField");
	p.innerHTML = "Відповідь: " + fib;
}

//Task №26
function randomColorsStart(){
	if (!colorInterval){
		lorem_text = document.getElementById("lorem");
		colorInterval = setInterval(randomColors, 1000);
	}
	else {
		clearInterval(colorInterval);
		colorInterval = null;
	}
}

function randomColors(){
	let red = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
	let green = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
	let blue = Math.floor(Math.random() * (255 - 1 + 1)) + 1;

	lorem_text.style.color =`rgb(${red}, ${green}, ${blue})`;
	lorem_text.style.background =`rgb(${Math.abs(255-red)}, ${Math.abs(255-green)}, ${Math.abs(255-blue)})`;
}

var lorem_text;
var colorInterval;