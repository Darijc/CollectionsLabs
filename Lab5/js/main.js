//Task 22
let makeArrayFromInputsButton= document.getElementById('makeArrayFromInputsButton');
let inputs= document.getElementsByClassName('block')
let blocks=document.getElementsByClassName('ggg');
let allValues=[];

makeArrayFromInputsButton.onclick=()=>{
    findMistakes();
    makeArrayFromInputs();
}

findMistakes=()=>{
    for (let block of inputs) {
        let values=block.value.split(',');
        allValues=allValues.concat(values);
    }

    let numbers= allValues.filter((v)=> v == +v);
    if(numbers.length!=allValues.length){
        alert('Ви зробили помилки при введені данних. Вводити можно виключно числа!!!')
    }
}
makeArrayFromInputs=()=>{
    let array=[];
    for (let block of blocks) {
        if(block.children[1].checked===true){
            array= array.concat(block.children[0].value.split(','));
        }
    }
    array=array.filter((v)=> v == +v).map(value => value/2);
    document.getElementById('result4').textContent = array;
}

//Task 17
function sortValue(){
    var n = document.getElementById('press_2').value;
    var text = document.getElementById('parag_2');
    console.log(n);
    text.innerHTML = "Значення по спаданню: <br>" + n + "<br>";
    while(n>0){
        text.innerHTML = text.innerHTML + (n-1) + "<br>";
        n--;
    }
}

//Task 13
function text_10(){
    let all_text = document.getElementById("input_text").value;
    let text_arr = all_text.split(',');
    let numb_arr = [];
    let text = "";
    for (var i = 0; i < text_arr.length; i++) {
      let numb = parseFloat(text_arr[i]);
      if (!(isNaN(numb))) {
          if(numb > 10){
            numb_arr.push(numb);
          }
      }
    }
    if(numb_arr.length != 0){
      for (var i = 0; i < numb_arr.length; i++) {
        text = text + " " + numb_arr[i];
      }
      document.getElementById("text_10").append(text);
    }
    else {
      document.getElementById("text_10").append("Таких елементів немає");
    }
}

//Task 20

let input1= document.getElementById('input1')
let input2=document.getElementById('input2');
let button=document.getElementById('button');

button.onclick=(ev)=>{

    const arr1 = input1.value.split(',');
    const arr2 = input2.value.split(',');
    const array3 = arr1.concat(arr2);
    //console.log(array3);
    ev.preventDefault();
    arrayUnique(array3);
    document.getElementById('result3').textContent = array3;
    
}
function arrayUnique(array3){
    return array3.filter((e,i,a)=>a.indexOf(e)==i)
}

//Task 2
function primeNumber(){
    var i,flag=0,number;
	number = Number(document.getElementById("press_1").value);
    var text = document.getElementById('parag_1');
    
    for(i=2; i <= number/2; i++)
	{
		if(number%i == 0)
		{
			flag = 1;
				break;
		}
	}
	if(flag == 0)
	{
        text.innerHTML = "Введене число є простим : " + number;
	}
	else
	{
        text.innerHTML = "Введене число не є простим : " + number;
	}
   }





