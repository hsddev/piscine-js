function sumOdd(arr) {
    // write your code here
    return arr.filter((x) => x % 2 != 0).length > 0
        ? arr
              .filter((x) => x % 2 != 0)
              .reduce((accumulator, curr) => accumulator + curr)
        : 0;
}

console.log(sumOdd([2, 4, 8]));
