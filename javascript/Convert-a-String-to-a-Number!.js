// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7



//My solution
const stringToNumber = function (str) {
    const num = parseInt(str);
    return num;
}