var output = document.getElementById("display");
var btn = document.querySelectorAll("button");

var result = "";
var a = -1;
var b = -1;
var isB = false;
var twoSymbols = false;

function calc(btnElement){
    var val = btnElement.value;
    const symbols = new Map([
        ["perc","%"],
        ["divide","/"],
        ["mul","*"],
        ["sub","-"],
        ["add","+"]
    ]);


    if(val == "perc" ||val == "divide" ||val == "mul" ||val == "sub" ||val == "add"){
        if(a == -1){
            alert("Select an input first");
        }else if(twoSymbols){
            alert("two symbols selected");
        }else{
            result+=symbols.get(val);
            output.innerHTML = result;
            isB = true;
            twoSymbols = true;
        }
    }else if(val == "clear"){
        result = "";
        output.innerHTML = result;
        a = -1;
        b = -1;
        isB = false;
        twoSymbols = false;
    }else if(val == "del"){
        result = result.slice(0,-1);
        output.innerHTML = result;
        if(twoSymbols){
            twoSymbols = false;
            isB = false;
        } 
        if(isB){
            //update b
        }else{
            //update a
        }
    }else if(val == "0" ||val == "1" ||val == "2" ||val == "3" ||val == "4" ||val == "5" ||
        val == "6" ||val == "7" ||val == "8" ||val == "9"){
        twoSymbols = false;
        result+=val;
        output.innerHTML = result;
        if(isB){
            if(b == -1)
                b = 0;
            b = b*10 + Number(val);
        }else{
            if(a == -1)
                a = 0;
            a = a*10 + Number(val);
        }
    }else if(val == "neg"){

    }else if(val == "decimal"){
        result+=".";
        output.innerHTML = result;
        if(isB){
            //update B
        }else{
            // update a
        }
    }
};

function answer(){
    if(a == -1 || b == -1){alert("input not given");}
};