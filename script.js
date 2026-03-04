var output = document.getElementById("display");
var btn = document.querySelectorAll("button");

var result = "";
var a = -1;
var b = -1;

function calc(btnElement){
    var val = btnElement.value;
    if(val != "answer"){
        result+=val;
        console.log(result);
    }else{
        output.innerHTML=result;
    }
}