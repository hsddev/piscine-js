// sign function that takes one number argument and return 1 if the number is positive, -1 if the number is negative and 0 if the number is exactly 0 You must not just use Math.sign, make your own.
const sign = (num) => (num > 0 ? 1 : num == 0 ? 0 : -1);

// sameSign function that takes 2 numbers as arguments and return true if they both have the same sign, or false otherwise.
const sameSign = (num1, num2) =>
    (num1 > 0 && num2 > 0) || (num1 < 0 && num2 < 0) ? true : false;
