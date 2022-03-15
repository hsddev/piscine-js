// indexOf which returns the index of the first occurrence of a value and takes as arguments an array to be searched, the value to be matched, and optionally the index from where to start searching from.
const indexOf = (arr, value, pos = 0) => {
    for (var i = pos; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }

    return -1;
};

// lastIndexOf which works just like the previous function but returns the index of the last occurrence of a value
const lastIndexOf = (arr, value, pos = 0) => {
    let newArr = arr.reverse();

    for (var i = pos; i < newArr.length; i++) {
        if (newArr[i] == value) {
            return i;
        }
    }

    return -1;
};
console.log(lastIndexOf(["t", 0, 0, "t"], "t", 2));
// includes which returns true if the value was found in the array
const includes = (arr, elem) => {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == elem) {
            return true;
        }
    }
    return false;
};
