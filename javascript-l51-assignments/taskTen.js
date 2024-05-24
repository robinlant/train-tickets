const falseStr = ")()[}";
const trueStr = "()[]{}()()()()()";

const checkBrackets = (string) => {
    const stack = [];
    const matchingBrackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of string) {
        if (matchingBrackets[char]) {
            stack.push(char);
        } else {
            if (stack.length === 0 || matchingBrackets[stack.pop()] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(checkBrackets(falseStr));
console.log(checkBrackets(trueStr));