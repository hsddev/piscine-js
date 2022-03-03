// words function that takes a string and split it into an array of strings on spaces
const words = (str) => str.split(" ");

// sentence function that takes an array of strings and join them with spaces
const sentence = (arr) => arr.join(" ");

// yell function that take a string and return it in upper case
const yell = (str) => str.toUpperCase();

// whisper function that take a string and return it in lower case and surround it with *
const whisper = (str) => "*" + str.toLowerCase() + "*";

// Create a capitalize function that takes a string and transforms it to upper case only for the first letter, and in lowercase for the rest of the string
const capitalize = (str) => {
    // Split the string in array for easy access/manipulation by indexing
    Split_String = str.split("");
    // Target the first word
    Split_String[0] = Split_String[0].toUpperCase();
    // Target the last word
    Split_String[Split_String.length - 1] =
        Split_String[Split_String.length - 1].toUpperCase();
    // Join the array into a single word
    Joined_Back = Split_String.join("");
    return Joined_Back;
};
