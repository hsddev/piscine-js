function replaceThe(txt) {
    // write your code here
    let words = txt.split(" ");

    let vowels = ["a", "o", "u", "i", "y"];

    return words.includes("the") && vowels.includes(txt.split("the ")[1][0])
        ? words.join(" ").replace("the", "an")
        : words.join(" ").replace("the", "a");
}

console.log(replaceThe("give me the book"));
