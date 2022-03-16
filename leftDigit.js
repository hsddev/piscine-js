function leftDigit(str) {
    // write your code here
    let arr = str.replace(/\s/g, "").split("");

    let result = "";

    for (var i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            result = arr[i];
            break;
        }
    }
    return result;
}
