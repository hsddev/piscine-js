function DecimalPlaces(num) {
    // write your code here
    return num.includes(".") ? num.split(".")[1].length : 0;
}

console.log(DecimalPlaces("4.98"));
