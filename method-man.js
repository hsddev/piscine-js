// words function that takes a string and split it into an array of strings on spaces
const words = (str) => str.split(" ");

// sentence function that takes an array of strings and join them with spaces
const sentence = (arr) => arr.join(" ");

// yell function that take a string and return it in upper case
const yell = (str) => str.toUpperCase();

// whisper function that take a string and return it in lower case and surround it with *
const whisper = (str) => "*" + str.toLowerCase() + "*";

// Create a capitalize function that takes a string and transforms it to upper case only for the first letter, and in lowercase for the rest of the string
const capitalize = (str) =>
    str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();

console.log(capitalize("STR"));
