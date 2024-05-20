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

const calculator = new Calculator();

const updateScreen = (outputInfo) => {
    elements.screenText.innerHTML = outputInfo.text;
    elements.operationText.innerHTML = outputInfo.operation;
}

// callback should take a number
const addNumbersOnclick = (callback, elems) => {
    elems.forEach((x, i) => {
        x.onclick = () => callback(i);
    });
}

addNumbersOnclick((number) => {
    calculator.inputNumber(number);
    const outputInfo = calculator.getOutputInfo();
    updateScreen(outputInfo);
}, [
    elements.buttons.btn0,
    elements.buttons.btn1,
    elements.buttons.btn2,
    elements.buttons.btn3,
    elements.buttons.btn4,
    elements.buttons.btn5,
    elements.buttons.btn6,
    elements.buttons.btn7,
    elements.buttons.btn8,
    elements.buttons.btn9
]);

elements.buttons.btnC.onclick = () => {
    calculator.clear();
    updateScreen(calculator.getOutputInfo());
};
elements.buttons.btnDivide.onclick = () => {
    calculator.inputOperation(calculator.operations.Divide);
    updateScreen(calculator.getOutputInfo());
};
elements.buttons.btnPlus.onclick = () => {
    calculator.inputOperation(calculator.operations.Plus);
    updateScreen(calculator.getOutputInfo());
};
elements.buttons.btnMultiply.onclick = () => {
    calculator.inputOperation(calculator.operations.Multiply);
    updateScreen(calculator.getOutputInfo());
};
elements.buttons.btnMinus.onclick = () => {
    calculator.inputOperation(calculator.operations.Minus);
    updateScreen(calculator.getOutputInfo());
};
elements.buttons.btnModulo.onclick = () => {
    calculator.inputOperation(calculator.operations.Modulo);
    updateScreen(calculator.getOutputInfo());
};
elements.buttons.btnRaise.onclick = () => {
    calculator.inputOperation(calculator.operations.Raise);
    updateScreen(calculator.getOutputInfo());
};
elements.buttons.btnDel.onclick = () => {
    calculator.delete();
    updateScreen(calculator.getOutputInfo());
}
elements.buttons.btnResult.onclick = () => {
    calculator.equals();
    updateScreen(calculator.getOutputInfo());
}