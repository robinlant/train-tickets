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
                this._tempSecondInput = this._secondInput;
                return;
            }
            default: {
                console.error("error at inputNumber case default is hit");
            }
        }
    }

    clear() {
        this._setupDefault();
    }

    sqrt() {
        if (this._state != this._states.firstInput) return;
        
        this._lastOperationCallback = (firstInput) => Math.sqrt(firstInput);

        this._firstInput = this._lastOperationCallback(this._firstInput);
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

    inputOperation(operation) {
        switch(this._state){
            case this._states.firstInput: {
                this._operation = operation;
                this._toggleState();
                return;
            }
            case this._states.secondInput:{
                if (this._secondInput == 0) return; // Do nothing

                this._toggleState();
                this.inputOperation(operation);
                return;
            }
            default: {
                console.error("error at inputOperation case default is hit");
                return;
            }
        }
    }

    equals() {
        switch(this._state) {
            case this._states.firstInput: {
                if (this._lastOperationCallback == null) return;

                this._firstInput = this._lastOperationCallback(this._firstInput);
                this._secondInput = 0;

                this._state = this._states.firstInput;
                return;
            }
            case this._states.secondInput: {
                this._toggleState();
                return;
            }
            default: {
                console.error("error at equals case default is hit");
            }
        }
    }

    delete() {
        switch(this._state) {
            case this._states.firstInput: {
                this._firstInput = this._firstInput.toString().slice(0, -1) || '0';
                this._firstInput = parseInt(this._firstInput, 10);
                return;
            }
            case this._states.secondInput: {
                this._secondInput = this._secondInput.toString().slice(0, -1) || '0';
                this._secondInput = parseInt(this._secondInput, 10);
                this._tempSecondInput = this._secondInput;
                return;
            }
            default: {
                console.error("error at delete case default is hit");
            }
        }
    }
    
    

    _states = {
        firstInput: 1,
        secondInput: 2,
    }

    _toggleState() {
        switch(this._state) {
            case this._states.firstInput: {
                this._state = this._states.secondInput;
                return;
            }
            case this._states.secondInput: {
                this._lastOperationCallback = this._getExecuteOperationCallback();
                this._firstInput = this._lastOperationCallback(this._firstInput);

                this._secondInput = 0;

                this._state = this._states.firstInput;
                return;
            }
            default: {
                console.error("error at _toggleState case default is hit");
            }
        }
    }

    _getExecuteOperationCallback() {
        switch(this._operation) {
            case this.operations.Plus:
                return this._getPlusOperationCallback();
            case this.operations.Minus:
                return this._getMinusOperationCallback();
            case this.operations.Multiply:
                return this._getMultiplyOperationCallback();
            case this.operations.Divide:
                return this._getDivideOperationCallback();
            case this.operations.Modulo:
                return this._getModuloOperationCallback();
            case this.operations.Raise:
                return this._getRaiseOperationCallback();
            default:
                console.error("error at _getExecuteOperationCallback case default is hit");
        }
    }
    

    _getPlusOperationCallback() {
         return (input) => input + this._tempSecondInput;
    }
    
    _getMinusOperationCallback() {
        return (input) => input - this._tempSecondInput;
    }

    _getMultiplyOperationCallback() {
        return (input) => input * this._tempSecondInput;
    }

    _getDivideOperationCallback() {
        return (input) => input / this._tempSecondInput;
    }

    _getModuloOperationCallback() {
        return (input) => input % this._tempSecondInput;
    }

    _getRaiseOperationCallback() {
        return (input) => Math.pow(input, this._tempSecondInput);
    }

    _setupDefault() {
        this._firstInput = 0;
        this._secondInput = 0;
        this._operation = this.operations.None;
        this._state = this._states.firstInput;
        this._lastOperationCallback = null;
        this._tempSecondInput = 0;
    }
}
