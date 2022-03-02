// get: a function that takes a key and return the corresponding value from the sourceObject
const get = (property) => sourceObject[property];

// set: a function that takes a key and a value update the value for the corresponding property of the sourceObject and return the set value
const set = (property, newValue) => {
    sourceObject[property] = newValue;
    return newValue;
};
