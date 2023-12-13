// const randomNumber = Math.random();

// let makeFaulty = randomNumber < 0.1 ? true : false;

// const sum = (a, b) => {
//     if (makeFaulty) {
//         return a - b;
//     } else {
//         return a + b;
//     };
// };


// write a program to calculate the factorial 


// using for loop 
// function factorial (n) {
//     let result = 1;
//     for (let i = n; i > 0; i--) {
//         result = result * i;
//     };
//     return result;
// };
// console.log(factorial(5));


// using reduce 
function multiply (i) {
    return i * (i - 1);
};

function factorial (n) {
    let result = n.reduce(multiply(n));
    return result;
};

console.log(factorial(5));