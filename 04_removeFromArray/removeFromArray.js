const removeFromArray = function (arr, ...num) {
    const numSet = new Set(num);
    return arr.filter(x => !numSet.has(x));
};

// Do not edit below this line
module.exports = removeFromArray;
