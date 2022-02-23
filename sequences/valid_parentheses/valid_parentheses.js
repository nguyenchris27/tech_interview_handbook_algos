/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length < 2) {
        return false;
    }

    let pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    let stack = [];

    for (i = 0; i < s.length; i++) {
        if (pairs[s[i]]) {
            stack.push(pairs[s[i]])
        } else if (stack[stack.length - 1] === s[i]) {
            stack.pop()
        } else {
            return false;
        }
    }
    return (!stack.length)
};

console.log(isValid("(){}"))