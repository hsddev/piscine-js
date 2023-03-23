let getBonannoPisano = () => {
    let bonannoPisano = document.getElementById("BonannoPisano");
    let rest = document.querySelectorAll("a:not(#BonannoPisano)");

    let result = [];
    result.push(bonannoPisano, Array.from(rest));
    return result;
};

let getActive = () => {
    const classicalActive = document.getElementsByClassName("classical.active");
    const classicalNonActive = document.getElementsByClassName(
        "classical:not(active)"
    );

    let result = [];
    result.push(Array.from(classicalActive), Array.from(classicalNonActive));
    return result;
};

let getArchitects = () => {
    const architects = document.getElementsByTagName("a");
    const nonArchitects = document.getElementsByTagName("span");

    let result = [];
    result.push(Array.from(architects), Array.from(nonArchitects));
    return result;
};

let getClassical = () => {
    const classical = document.getElementsByClassName("a.classical");
    const nonClassical = document.getElementsByClassName("a:not(.classical)");

    let result = [];
    result.push(Array.from(classical), Array.from(nonClassical));
    return result;
};

export { getBonannoPisano, getActive, getArchitects, getClassical };
