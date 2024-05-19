class Calculator {
    constructor() {
        this._setupDefault();
    }

    operations = {
        None: "",
        Plus: "+",
        Minus: "-",
        Multiply: "*",
        Divide: "/",
        Modulo: "%",
        Square: "sqrt",
        Raise: "^",
    }

    inputNumber(number) {
        switch(this._state) {
            case this._states.firstInput: {
                this._firstInput = this._firstInput * 10 + number;
                return;
            }
            case this._states.secondInput: {
                this._secondInput = this._secondInput * 10 + number;
                return;
            }
            default: {
                console.error("error at inputNumber case default is hit");
            }
        }
    }

    _states = {
        firstInput: 1,
        secondInput: 2,
    }

    getOutputInfo() {
        switch(this._state) {
            case this._states.firstInput: {
                return { text: this._firstInput, operation: this._operation } ;
            }
            case this._states.secondInput: {
                return { text: this._secondInput, operation: this._operation };
            }
            default: {
                console.error("error at getOutputInfo case default is hit");
            }
        }
    }

    clear() {
        this._setupDefault();
    }

    _setupDefault() {
        this._firstInput = 0;
        this._secondInput = 0;
        this._operation = this.operations.None;
        this._state = this._states.firstInput;
    }
}
