const textbox=document.getElementById("textbox");
const celsius=document.getElementById("celsius");

const fahrenheit=document.getElementById("fahrenheit");

const result=document.getElementById("result");

let temp;
function convert(){
    if(celsius.checked){
        temp=Number(textbox.value);
        temp=temp*9/5+32
        result.textContent=temp +"°F"
    }
    else if(fahrenheit.checked){
        temp=Number(textbox.value);
        temp=temp*5/9-32
        result.textContent=temp +"°c"

    }
  else{
        result.textContent="select a unit"
    }

}

