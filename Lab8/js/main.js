
//Task 11
function stdinSelect(){
   var d = document.getElementById("stdin-select");
   var displaytext = d.options[d.selectedIndex].text;
   document.getElementById("txtvalue").value="Обраний елемент : "+displaytext;
}

//Task 5
let inp = document.getElementById('t1-color');

inp.addEventListener("click", (evn) => {
    const ctrl = evn.getModifierState("Control");
    console.log(ctrl);

    if (ctrl == true){
        console.log("working !")
        inp.style.backgroundColor = "red";

    }

});
inp.onmouseleave=()=>{
    inp.style.backgroundColor = "white";

}
