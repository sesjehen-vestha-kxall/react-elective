const SELECTOR = 'operation-selector';
const TARGET = 'result';
const N1 = 'number-a';
const N2 = 'number-b';

function getValues() {
    return [
        parseFloat(document.getElementById(N1).value) || 0,
        parseFloat(document.getElementById(N2).value) || 0
    ];
}

document.getElementById(SELECTOR).onchange = () => {
    let [a, b] = getValues();

    switch (document.getElementById(SELECTOR).value) {
        case '+': r = a + b; break;
        case '-': r = a - b; break;
        case '*': r = a * b; break;
        case '/': r = a / b;
    }
    document.getElementById(TARGET).textContent = `result: ${r}`;
}