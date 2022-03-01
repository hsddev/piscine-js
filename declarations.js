var escapeStr = "'" + "\\" + "`" + "/" + '"';
var arr = [4, "2"];
var obj = {
    str: "Hello world",
    num: 30,
    bool: true,
    undef: undefined,
};

const nested = {
    arr: [4, undefined, "2"],
    obj: {
        str: "Hey",
        num: 20,
        bool: false,
    },
};

Object.freeze(arr);
Object.freeze(obj);
Object.freeze(nested);
