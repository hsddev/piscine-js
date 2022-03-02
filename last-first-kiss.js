// a first function that takes an array or a string and return the first element.
const first = (arr) => arr[0];

// a last function that takes an array or a string and return the last element.
const last = (arr) => arr[arr.length - 1];

// a kiss function that returns an array of 2 elements the last and the first element, in that order
const kiss = (first, last) => [last, first];
