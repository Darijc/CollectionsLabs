function showThirdWord(){

	let str = document.getElementById("inputtedTextTask1").value.split(/[\s,.]+/, 3);
	alert("Третє введене слово: " + str[2]);
	
}

function getPreviousDay(){

	let day = new Date();
	let weekDays = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
	let dayValue = day.getDay();

	if(dayValue==0){
		dayValue = 6;
	}else{
		dayValue--;
	}

	let p = document.getElementById("dateField");

	let word = "";
	if(dayValue == (0 || 3 || 5 || 6)){
		word += "була";
	}else{
		word += "був";
	}
	p.innerHTML = "Вчора " + word + " " + weekDays[dayValue];
}

function calculateSquareRoot(){

	let number = parseFloat(document.getElementById("inputtedNumber").value);
	let p = document.getElementById("rootField"); 

	p.innerHTML = "Відповідь: " + Math.round(Math.sqrt(number));
}