// repeat function that takes a string and a number as parameters and return the repeated string by the given number
const repeat = (str, num) => {
    let result = "";
    for (var i = 0; i < num; i++) {
        result += str;
    }
    return result;
};
