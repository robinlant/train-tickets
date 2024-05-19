const config = {
    screenTextId: "text",
    operationTextId: "operation",
    buttons: {
        btn1: "btn1",
        btn2: "btn2",
        btn3: "btn3",
        btnPlus: "btnPlus",
        btnMultiply: "btnMultiply",
        btnSquare: "btnSquare",
        btn4: "btn4",
        btn5: "btn5",
        btn6: "btn6",
        btnMinus: "btnMinus",
        btnDivide: "btnDivide",
        btn7: "btn7",
        btn8: "btn8",
        btn9: "btn9",
        btnResult: "btnResult",
        btnModulo: "btnModulo",
        btnC: "btnC",
        btn0: "btn0",
        btnDel: "btnDel",
        btnRaise: "btnRaise"
    }
};

const elements = {
    screenText: document.querySelector(`#${config.screenTextId}`),
    operationText: document.querySelector(`#${config.operationTextId}`),
    buttons: {
        btn1: document.querySelector(`#${config.buttons.btn1}`),
        btn2: document.querySelector(`#${config.buttons.btn2}`),
        btn3: document.querySelector(`#${config.buttons.btn3}`),
        btnPlus: document.querySelector(`#${config.buttons.btnPlus}`),
        btnMultiply: document.querySelector(`#${config.buttons.btnMultiply}`),
        btnSquare: document.querySelector(`#${config.buttons.btnSquare}`),
        btn4: document.querySelector(`#${config.buttons.btn4}`),
        btn5: document.querySelector(`#${config.buttons.btn5}`),
        btn6: document.querySelector(`#${config.buttons.btn6}`),
        btnMinus: document.querySelector(`#${config.buttons.btnMinus}`),
        btnDivide: document.querySelector(`#${config.buttons.btnDivide}`),
        btn7: document.querySelector(`#${config.buttons.btn7}`),
        btn8: document.querySelector(`#${config.buttons.btn8}`),
        btn9: document.querySelector(`#${config.buttons.btn9}`),
        btnResult: document.querySelector(`#${config.buttons.btnResult}`),
        btnModulo: document.querySelector(`#${config.buttons.btnModulo}`),
        btnC: document.querySelector(`#${config.buttons.btnC}`),
        btn0: document.querySelector(`#${config.buttons.btn0}`),
        btnDel: document.querySelector(`#${config.buttons.btnDel}`),
        btnRaise: document.querySelector(`#${config.buttons.btnRaise}`)
    }
};

const updateText = (outputObject) => {
    elements.screenText.innerHTML = outputObject.text;
    elements.operationText.innerHTML = outputObject.operation;
}

const calculator = new Calculator();

elements.btn0.onclick = () => {
    calculator.inputNumber(0);

}
elements.btn1.onclick = () => {
    calculator.inputNumber(1);
}
elements.btn2.onclick = () => {
    calculator.inputNumber(2);
}
elements.btn3.onclick = () => {
    calculator.inputNumber(3);
}
elements.btn4.onclick = () => {
    calculator.inputNumber(4);
}
elements.btn5.onclick = () => {
    calculator.inputNumber(5);
}
elements.btn6.onclick = () => {
    calculator.inputNumber(6);
}
elements.btn7.onclick = () => {
    calculator.inputNumber(7);
}
elements.btn8.onclick = () => {
    calculator.inputNumber(8);
}
elements.btn9.onclick = () => {
    calculator.inputNumber(9);
}