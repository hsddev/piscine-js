function removeDuplicate(arr) {
    // write your code here
    return arr.filter((value, index) => arr.indexOf(value) === index);
}
