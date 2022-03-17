function hasSpace(str) {
    // write your code here
    return str
        .split("")
        .map((x) => {
            if (x == " ") return "#";
            if (x == "#") return " ";
            return x;
        })
        .join("");
}
