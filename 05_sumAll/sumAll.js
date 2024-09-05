const sumAll = function (num1, num2) {
    let sum = 0;

    if (num1 < 0 ||
        num2 < 0 ||
        !Number.isInteger(num1) ||
        !Number.isInteger(num2)
    ) return "ERROR";

    if (num2 > num1) {
        getSum(num1, num2)
    } else if (num1 > num2) {
        getSum(num2, num1)
    }

    function getSum(a, b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
