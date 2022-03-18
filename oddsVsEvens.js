function oddsVsEvens(num) {
    // write your code here
    let odd = [];
    let even = [];
    let arr = num
        .toString()
        .split("")
        .map((x) => {
            return x % 2 == 0 ? even.push(parseInt(x)) : odd.push(parseInt(x));
        });

    let oddSum = odd.reduce((partialSum, a) => partialSum + a, 0);
    let evenSum = even.reduce((partialSum, a) => partialSum + a, 0);

    if (oddSum > evenSum) {
        return "odd";
    } else if (oddSum < evenSum) {
        return "even";
    } else {
        return "equal";
    }
}

console.log(oddsVsEvens(463));
