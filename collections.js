// variables
const str = "hello";
const arr = [1, 2, 1, 3];
const obj = { x: 45, y: 75, radius: 24 };
const set = new Set();
const map = new Map();
set.add(1);
set.add(2);
set.add(1);
set.add(3);
map.set("a", 1);
map.set("b", 2);
map.set(3, "c");
map.set(4, "d");

// arrToSet function to convert an array to Set
const arrToSet = (arr) => {
    return new Set(arr);
}; // -> Set { 1, 2, 3 }

// arrToStr function to convert an array to a string
const arrToStr = (arr) => {
    return arr.join("");
}; // -> '1213'

// setToArr function to convert a Set to an array
const setToArr = (set) => {
    var newArr = [];
    set.forEach((x) => {
        newArr.push(x);
    });

    return newArr;
}; // -> [1, 2, 3]

// setToStr function to convert a Set to a string
const setToStr = (set) => {
    var str = "";
    set.forEach((x) => (str += x));
    return str;
}; // -> '123'

// strToArr function to convert a string to an array
const strToArr = (str) => {
    return str.split("");
}; // -> ['h', 'e', 'l', 'l', 'o']

// strToSet function to convert a string to Set
const strToSet = (str) => {
    return new Set(strToArr(str));
}; // -> Set { 'h', 'e', 'l', 'o' }

const mapToObj = (map) => {
    const obj = {};
    for (const key of map.keys()) {
        obj[key] = map.get(key);
    }
    return obj;
}; // -> { a: 1, b: 2, '3': 'c', '4': 'd' }

// objToArr function to convert an object to an array
const objToArr = (obj) => {
    return Object.values(obj);
}; // -> [45, 75, 24]

// objToMap function to convert an object to Map
const objToMap = (obj) => {
    return new Map(Object.entries(obj));
}; // -> Map { 'x' => 45, 'y' => 75, 'radius' => 24 }

// arrToObj function to convert an array to object
const arrToObj = (arr) => {
    return Object.assign({}, arr);
}; // -> { '0': 1, '1': 2, '2': 1, '3': 3 }

// strToObj function to convert a string to object
const strToObj = (str) => {
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        obj[i] = str[i];
    }

    return obj;
}; // -> { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }

// superTypeOf function to get the typeof variable
const superTypeOf = (x) => {
    var type;
    switch (typeof x) {
        case "string":
            type = "String";
            break;
        case "function":
            type = "Function";
            break;
        case "object":
            if (Array.isArray(x) == true) {
                type = "Array";
            } else {
                type = "Object";
            }
            if (x instanceof Set) type = "Set";
            if (x instanceof Map) type = "Map";
            break;
        case "number":
            type = "Number";
            break;
        case "null":
            type = "null";
            break;
        case "undefined":
            type = "undefined";
            break;
    }
    return type;
};
