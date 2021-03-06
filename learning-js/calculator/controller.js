function getValues() {
    return [
        parseFloat(document.getElementById('number-a')?.value),
        parseFloat(document.getElementById('number-b')?.value)
    ]
}

function operate(op) {
    let r;
    let [a, b] = getValues();
    switch (op) {
        case '+': r = a + b; break;
        case '-': r = a - b; break;
        case '*': r = a * b; break;
        case '/': r = a / b;
    }
    document.getElementById('result').textContent = `result: ${r ?? 'something went wrong!'}`;
}

document.getElementById('sum').onclick = () => operate('+');
document.getElementById('sub').onclick = () => operate('-');
document.getElementById('mul').onclick = () => operate('*');
document.getElementById('div').onclick = () => operate('/');
