const output = document.getElementById("display");
let expression = "";
let isResultInvalid = false;
let doubleNegation = false;

document.addEventListener("keydown", handleKey);
const keyMap = {
    "+": "add",
    "-": "sub",
    "*": "mul",
    "/": "divide",
    "%": "perc",
    ".": "decimal",
    "Backspace": "del",
    "Escape": "clear"
};

function handleKey(e) {
    const key = e.key;

    if (!isNaN(key)) {
        calc({ value: key });
    } else if (keyMap[key]) {
        calc({ value: keyMap[key] });
    } else if (key === "Enter") {
        answer();
    }
}

const symbols = {
    perc: "%",
    divide: "/",
    mul: "*",
    sub: "-",
    add: "+"
};

function calc(btn) {
    const val = btn.value;
    if (isResultInvalid) {
        if (val === "clear") {
            expression = "";
            output.innerText = "";
            isResultInvalid = false;
            return;
        } else {
            expression = "";
            isResultInvalid = false;
        }
    }
    if (symbols[val]) {
        if (expression === "" && val !== "sub") return;
        if (/[+\-*/%]$/.test(expression)) return;
        expression += symbols[val];
    } 
    else if (val === "clear") {
        expression = "";
        isResultInvalid = false;
    }
    else if (val === "del") {
        expression = expression.slice(0, -1);
    } 
    else if (val === "decimal") {
        const lastNumber = expression.split(/[+\-*/%]/).pop();
        if (!lastNumber.includes(".")) {
            expression += ".";
        }
    }
    else if (val === "neg") {
        if(!doubleNegation)
        expression = "-" + expression;
        doubleNegation = true;
    } 
    else {
        expression += val;
    }

    output.innerText = expression;
}

function answer() {
    try {
        let result = eval(expression);

        if (!isFinite(result)) {
            output.innerText = result;
            expression = "";
            isResultInvalid = true;
            return;
        }

        output.innerText = result;
        expression = result.toString();
        isResultInvalid = false;
        doubleNegation = false;

    } catch {
        output.innerText = "Error";
        expression = "";
        isResultInvalid = true;
    }
}

function setTheme(theme) {
    document.body.classList.remove("dark");
    if (theme) document.body.classList.add(theme);

    localStorage.setItem("theme", theme);
}

window.onload = () => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
};