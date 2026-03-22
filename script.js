const output = document.getElementById("display");
let expression = "";

const symbols = {
    perc: "%",
    divide: "/",
    mul: "*",
    sub: "-",
    add: "+"
};

function calc(btn) {
    const val = btn.value;

    if (symbols[val]) {
        //prevent double operators
        if (/[+\-*/%]$/.test(expression)) return;
        expression += symbols[val];
    } 
    else if (val === "clear") {
        expression = "";
    } 
    else if (val === "del") {
        expression = expression.slice(0, -1); //deletes the last char
    } 
    else if (val === "decimal") {
        if (!/\.\d*$/.test(expression)) {
            expression += ".";
        }
    } 
    else if (val === "neg") {
        expression = "-" + expression;
    } 
    else {
        expression += val;
    }

    output.innerText = expression;
}

function answer() {
    try {
        let result = eval(expression); // calculates itself
        output.innerText = result;
        expression = result.toString();
    } catch {
        output.innerText = "Error";
        expression = "";
    }
}