//Task 6
let input1=document.getElementById('input1');
let button1=document.getElementById('button1');
let patt = new RegExp("([a-zA-Z0-9\\s_\\\\.\\-\\(\\):])+(.txt|.html|.php)");

button1.onclick=(ev)=>{
    task1();
    ev.preventDefault();
}

function task1(){
    let res = patt.test(input1.value);
    if(res){
        alert('Введено правильне розширення')
    }else{
        alert('Введено помилкове розширення')
    }
}


//Task 5
let input2=document.getElementById('input2');
let button2=document.getElementById('button2');
let patt1 = new RegExp('^(http/https?:\\/\\/)?');

button2.onclick=(ev)=>{
    task2();
    ev.preventDefault();
}

function task2(){
    let res = patt1.test(input2.value);
    if(res){
        alert('Введено правильне розширення')
    }else{
        alert('Введено помилкове розширення')
    }
}

//Task 4
let input3=document.getElementById('input3');
let button3=document.getElementById('button3');
let patt2 = new RegExp("((http|https)(:\\/\\/))?([a-zA-Z0-9]+[.]{1}){2}[a-zA-z0-9]+(\\/{1}[a-zA-Z0-9]+)*\\/?", "i");

button3.onclick=(ev)=>{
    task3();
    ev.preventDefault();
}

function task3(){
    let res = patt2.test(input3.value);
    if(res){
        alert('Введено правильний домен')
    }else{
        alert('Введений домен містить помилки')
    }
}

//Task 11
function spaceChange(){
	let val = document.getElementById('but1').value;
	document.getElementById('but1').value = val.replace(/\s+/g, ' ');
}

//Task 13
function stripHtmlComments() {
	let val = document.getElementById('myTextarea').value;
	document.getElementById('myTextarea').value = val.replace(/<!--(?!>)[\S\s]*?-->/g, '');
  }
  