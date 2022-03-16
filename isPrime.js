function primesNums(array) {
    // write your code here
    return array.filter((x) =>
        x < 10 ? [2, 3, 5, 7].includes(x) : ![2, 3, 5, 7].some((i) => !(x % i))
    );
}
