// multiply that act like the operator without using it
const multiply = (a, b) => {
    let result = 0;
    for (var i = 0; i < b; i++) {
        result += a;
    }
    return result;
};

// divide that do an integer division without using
const divide = (a, b) => {
    if (a === 0 && b === 0) return NaN;

    if (a === 0) return 0;

    if (b === 0) return a > 0 ? Infinity : -Infinity;

    var neg = a * b < 0;

    a = Math.abs(a);
    b = Math.abs(b);

    for (var i = 0; a >= b; ++i) a -= b;

    return neg ? -i : i;
};

// modulo that act like the operator without using it
const modulo = (a, b) => {
    return a - multiply(b, divide(a, b));
};
