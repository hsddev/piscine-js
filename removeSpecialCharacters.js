function removeSpecialCharacters(str) {
    // write your code here
    return str
        .split("")
        .filter(
            (x) =>
                (x >= "a" && x <= "z") ||
                (x >= "A" && x <= "Z") ||
                x == " " ||
                x == "-" ||
                x == "_"
        )
        .join("");
}
