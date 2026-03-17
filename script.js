var output = document.getElementById("display");
var btn = document.querySelectorAll("button");

var result = "";
var a = -1;
var b = -1;
var isB = false;
var twoSymbols = false;
var operator = "";

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
            operator = symbols.get(val);
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
            let lastDigit = b%10;
            b = b-lastDigit;
            b = b/10;
        }else{
            let lastDigit = a%10;
            a = a-lastDigit;
            a = a/10;
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
        //negation
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
    if(a == -1 || b == -1){alert("input not given"); return;}
    switch(operator){
        case "%":
            result = a%b; // change to percentage at last
            break;
        case "/":
            result = a/b;
            break;
        case "*":
            result = a*b;
            break;
        case "+":
            result = a+b;
            break;
        case "-":
            result = a-b;
            break;
    }
    operator = "";
    output.innerHTML = result;
    a = Number(result);
    b = -1;

    // when entering input after calc it should show "ans" and should hold the previous result
};