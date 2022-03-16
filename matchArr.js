function match_array(array1, array2) {
    // write your code here
    return array1
        .map((x) => {
            return array2.includes(x) && array1.length == array2.length
                ? true
                : false;
        })
        .filter((x) => x == false).length == 0
        ? true
        : false;
}
